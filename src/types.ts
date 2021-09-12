import type { WorkerHistory } from './web-worker/worker-history';
import type { WorkerLocation } from './web-worker/worker-location';
import type { WorkerStorage } from './web-worker/worker-storage';

export type CreateWorker = (workerName: string) => Worker;

export type MessageFromWorkerToSandbox =
  | [WorkerMessageType.MainDataRequestFromWorker]
  | [WorkerMessageType.InitializedWorkerScript, number, string]
  | [WorkerMessageType.InitializeNextWorkerScript]
  | [WorkerMessageType.ForwardMainDataResponse, MainAccessResponse];

export type MessageFromSandboxToWorker =
  | [WorkerMessageType.MainDataResponseToWorker, InitWebWorkerData]
  | [WorkerMessageType.InitializeNextWorkerScript, InitializeScriptData]
  | [WorkerMessageType.RefHandlerCallback, number, SerializedTransfer, SerializedTransfer]
  | [WorkerMessageType.ForwardMainDataRequest, MainAccessRequest];

export const enum WorkerMessageType {
  MainDataRequestFromWorker,
  MainDataResponseToWorker,
  InitializedWorkerScript,
  InitializeNextWorkerScript,
  RefHandlerCallback,
  ForwardMainDataRequest,
  ForwardMainDataResponse,
}

export type PostMessageToWorker = (msg: MessageFromSandboxToWorker) => void;

export interface MainWindowContext {
  $winId$: number;
  $parentWinId$: number;
  $cleanupInc$: number;
  $config$: PartytownConfig | undefined;
  $history$: History;
  $instanceIdByInstance$: WeakMap<any, number>;
  $instances$: [number, any][];
  $interfaces$?: InterfaceInfo[];
  $isInitialized$?: boolean;
  $localStorage$: Storage;
  $nextId$: number;
  $scopePath$: string;
  $sessionStorage$: Storage;
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
  $history$: WorkerHistory;
  $importScripts$: (...urls: string[]) => void;
  $isInitialized$?: boolean;
  $localStorage$: WorkerStorage;
  $location$: WorkerLocation;
  $postMessage$: (msg: MessageFromWorkerToSandbox) => void;
  $sessionStorage$: WorkerStorage;
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

export const enum PlatformApiId {
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
  $winId$: number;
  $msgId$: number;
  $accessType$: AccessType;
  $instanceId$: number;
  $memberPath$: string[];
  $data$: SerializedTransfer;
  $extraInstructions$?: ExtraInstruction[];
  $contextWinId$?: number;
}

export const enum ExtraInstruction {
  SET_INERT_IMG,
  SET_INERT_SCRIPT,
  SET_PARTYTOWN_ID,
  SET_IFRAME_SRCDOC,
  WAIT_FOR_INSTANCE_MEMBER,
}

export interface MainAccessResponse {
  $winId$: number;
  $msgId$: number;
  $instanceId$: number;
  $rtnValue$?: SerializedTransfer;
  $isPromise$?: any;
  $error$?: string;
}

export const enum SerializedType {
  Array,
  Instance,
  Method,
  Object,
  Primitive,
  Ref,
}

export type SerializedArrayTransfer = [SerializedType.Array, SerializedTransfer[]];

export type SerializedInstanceTransfer = [SerializedType.Instance, SerializedInstance];

export type SerializedMethodTransfer = [SerializedType.Method];

export type SerializedObjectTransfer = [
  SerializedType.Object,
  { [key: string]: SerializedTransfer }
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
  $interfaceType$: InterfaceType;
  $nodeName$?: string;
}

export interface SerializedNodeList extends SerializedInstance {
  $data$: SerializedInstance[];
}

export interface PartytownConfig {
  logCalls?: boolean;
  logGetters?: boolean;
  logSetters?: boolean;
  logImageRequests?: boolean;
  logScriptExecution?: boolean;
  logStackTraces?: boolean;
}

export interface MainWindow extends Window {
  frameElement: MainFrameElement | null;
  partytown?: PartytownConfig;
  partyWin?: (win: MainWindow) => void;
  partyWinId?: number;
  parent: MainWindow;
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
  Text = '#text',
}
