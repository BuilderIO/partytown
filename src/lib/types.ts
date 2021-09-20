import type { WorkerLocation } from './web-worker/worker-location';

export type CreateWorker = (workerName: string) => Worker;

export type MessageFromWorkerToSandbox =
  | [WorkerMessageType.MainDataRequestFromWorker]
  | [WorkerMessageType.InitializedWorkerScript, number, string]
  | [WorkerMessageType.InitializeNextWorkerScript]
  | [WorkerMessageType.ForwardMainDataResponse, MainAccessResponse]
  | [WorkerMessageType.RunStateProp, RunStatePropData];

export type MessageFromSandboxToWorker =
  | [WorkerMessageType.MainDataResponseToWorker, InitWebWorkerData]
  | [WorkerMessageType.InitializeNextWorkerScript, InitializeScriptData]
  | [
      WorkerMessageType.RefHandlerCallback,
      number,
      SerializedTransfer | undefined,
      SerializedTransfer | undefined
    ]
  | [WorkerMessageType.ForwardMainDataRequest, MainAccessRequest]
  | [WorkerMessageType.ForwardEvent, string, any[] | undefined]
  | [WorkerMessageType.RunStateProp, RunStatePropData];

export const enum WorkerMessageType {
  MainDataRequestFromWorker,
  MainDataResponseToWorker,
  InitializedWorkerScript,
  InitializeNextWorkerScript,
  RefHandlerCallback,
  ForwardMainDataRequest,
  ForwardMainDataResponse,
  ForwardEvent,
  RunStateProp,
}

export type RunStatePropData = {
  $winId$: number;
  $instanceId$: number;
  $stateProp$: StateProp;
};

export const enum StateProp {
  errorHandlers,
  loadHandlers,
  url,
  partyWinId,
}

export type PostMessageToWorker = (msg: MessageFromSandboxToWorker) => void;

export interface MainWindowContext {
  $winId$: number;
  $parentWinId$: number;
  $cleanupInc$: number;
  $config$: PartytownConfig | undefined;
  $instanceIdByInstance$: WeakMap<any, number>;
  $instances$: [number, any][];
  $interfaces$?: InterfaceInfo[];
  $isInitialized$?: boolean;
  $nextId$: number;
  $scopePath$: string;
  $startTime$?: number;
  $url$: string;
  $window$: MainWindow;
  $worker$?: PartytownWebWorker;
}

export interface PartytownWebWorker extends Worker {
  postMessage: PostMessageToWorker;
}

export interface InitWebWorkerData {
  $winId$: number;
  $parentWinId$: number;
  $config$: PartytownConfig;
  $documentCompatMode$: string;
  $documentCookie$: string;
  $documentReadyState$: string;
  $documentReferrer$: string;
  $documentTitle$: string;
  $firstScriptId$: number;
  $interfaces$: InterfaceInfo[];
  $scopePath$: string;
  $url$: string;
}

export interface InitWebWorkerContext {
  $currentScriptId$: number;
  $currentScriptUrl$: string;
  $importScripts$: (...urls: string[]) => void;
  $isInitialized$?: boolean;
  $location$: WorkerLocation;
  $postMessage$: (msg: MessageFromWorkerToSandbox) => void;
}

export type InterfaceInfo = [InterfaceType, MemberTypeInfo];

export interface MemberTypeInfo {
  [memberName: string]: InterfaceType;
}

export const enum InterfaceType {
  Window = 0,
  Element = 1, // same as NodeType
  Method = 2,
  TextNode = 3, // same as NodeType
  NamedNodeMap = 4,
  DOMStringMap = 5,
  DOMTokenList = 6,
  NodeList = 7,
  History = 8,
  Document = 9, // same as NodeType
  Storage = 10,
  CSSStyleDeclaration = 11,
}

export const enum PlatformInstanceId {
  window,
  history,
  localStorage,
  sessionStorage,
  document,
  documentElement,
  head,
  body,
}

export interface WebWorkerContext extends InitWebWorkerData, InitWebWorkerContext {}

export interface InitializeScriptData {
  $winId$: number;
  $instanceId$: number;
  $content$?: string;
  $url$?: string;
}

export const enum AccessType {
  Get,
  Set,
  CallMethod,
}

export interface MainAccessRequest {
  $msgId$: number;
  $winId$: number;
  $forwardToWin$: boolean;
  $tasks$: MainAccessRequestTask[];
}

export interface MainAccessRequestTask {
  $instanceId$: number;
  $interfaceType$: InterfaceType;
  $nodeName$?: string;
  $accessType$: AccessType;
  $memberPath$: string[];
  $data$?: SerializedTransfer;
  $extraInstructions$?: ExtraInstruction[];
}

export const enum ExtraInstruction {
  SET_INERT_SCRIPT,
  SET_IFRAME_SRCDOC,
  WAIT_FOR_INSTANCE_MEMBER,
}

export interface MainAccessResponse {
  $msgId$: number;
  $winId$: number;
  $errors$: string[];
  $rtnValue$?: SerializedTransfer;
  $isPromise$?: any;
}

export const enum SerializedType {
  Array,
  Instance,
  Method,
  Object,
  Primitive,
  Ref,
}

export type SerializedArrayTransfer = [SerializedType.Array, (SerializedTransfer | undefined)[]];

export type SerializedInstanceTransfer = [SerializedType.Instance, SerializedInstance];

export type SerializedMethodTransfer = [SerializedType.Method];

export type SerializedObjectTransfer = [
  SerializedType.Object,
  { [key: string]: SerializedTransfer | undefined }
];

export type SerializedPrimitiveTransfer =
  | [SerializedType.Primitive, string | number | boolean | null | undefined]
  | [SerializedType.Primitive];

export type SerializedRefTransfer = [SerializedType.Ref, number];

export type SerializedTransfer =
  | SerializedArrayTransfer
  | SerializedInstanceTransfer
  | SerializedMethodTransfer
  | SerializedObjectTransfer
  | SerializedPrimitiveTransfer
  | SerializedPrimitiveTransfer
  | SerializedRefTransfer
  | [];

export interface SerializedInstance {
  $winId$: number;
  $instanceId$?: number;
  /**
   * Node Type for Element (1), Text (3) and Document (9)
   */
  $interfaceType$: InterfaceType;
  /**
   * Node name for Node instances
   */
  $nodeName$?: string;
  /**
   * Node list data
   */
  $items$?: any[];
}

export interface PartytownConfig {
  /**
   * When set to `true`, Partytown scripts are not inlined and not minified.
   */
  debug?: boolean;
  /**
   * Many third-party scripts provide a global variable which user code calls
   * in order to send data to the service. For example, Google Tag Manager uses
   * a [Data Layer](https://developers.google.com/tag-manager/devguide) array,
   * and by pushing data to the array, the data is then sent on to GTM. Because
   * we're moving third-party scripts to a web worker, the main thread needs to
   * know which variables to patch first, and when Partytown loads, it can then
   * forward the event data on to the service.
   *
   * Below is an example of Google Tag Manager, Hubspot and Intercom forward configs:
   *
   * ```js
   * ['dataLayer.push', '_hspt.push', 'intercom']
   * ```
   */
  forward?: PartytownForwardConfig;
  /**
   * Log method calls (debug mode required)
   */
  logCalls?: boolean;
  /**
   * Log getter calls (debug mode required)
   */
  logGetters?: boolean;
  /**
   * Log setter calls (debug mode required)
   */
  logSetters?: boolean;
  /**
   * Log Image() src requests (debug mode required)
   */
  logImageRequests?: boolean;
  /**
   * Log script executions (debug mode required)
   */
  logScriptExecution?: boolean;
  /**
   * Log navigator.sendBeacon() requests (debug mode required)
   */
  logSendBeaconRequests?: boolean;
  /**
   * Log stack traces (debug mode required)
   */
  logStackTraces?: boolean;
}

export type PartytownForwardConfig = string[];

export interface MainWindow extends Window {
  frameElement: MainFrameElement | null;
  partytown?: PartytownConfig;
  partyWin?: (win: MainWindow) => void;
  partyWinId?: number;
  parent: MainWindow;
  top: MainWindow;
  _ptf?: any[];
}

export interface MainFrameElement extends HTMLIFrameElement {
  partyWinId?: number;
}

export const enum NodeName {
  Body = 'BODY',
  Comment = '#comment',
  Document = '#document',
  DocumentElement = 'HTML',
  DocumentFragment = '#document-fragment',
  Head = 'HEAD',
  Script = 'SCRIPT',
  Text = '#text',
}

export type EventHandler = (ev: any) => void;
