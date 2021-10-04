import type { Location } from './web-worker/worker-location';

export type CreateWorker = (workerName: string) => Worker;

export type Messenger = (
  sandboxWindow: Window,
  receiveMessage: MessengerRequestCallback
) => Promise<boolean>;

export type MessengerRequestCallback = (
  accessReq: MainAccessRequest,
  responseCallback: MessengerResponseCallback
) => void;

export type MessengerResponseCallback = (accessRsp: MainAccessResponse) => void;

export type MessageFromWorkerToSandbox =
  | [WorkerMessageType.MainDataRequestFromWorker]
  | [WorkerMessageType.InitializedWorkerScript, number, string]
  | [WorkerMessageType.InitializeNextWorkerScript]
  | [WorkerMessageType.ForwardWorkerAccessResponse, MainAccessResponse]
  | [WorkerMessageType.RunStateHandlers, number, StateProp];

export type MessageFromSandboxToWorker =
  | [WorkerMessageType.MainDataResponseToWorker, InitWebWorkerData]
  | [WorkerMessageType.InitializeNextWorkerScript, InitializeScriptData]
  | [WorkerMessageType.RefHandlerCallback, RefHandlerCallbackData]
  | [WorkerMessageType.ForwardWorkerAccessRequest, MainAccessRequest]
  | [WorkerMessageType.ForwardMainTrigger, ForwardMainTriggerData]
  | [WorkerMessageType.RunStateHandlers, number, StateProp];

export const enum WorkerMessageType {
  MainDataRequestFromWorker,
  MainDataResponseToWorker,
  InitializedWorkerScript,
  InitializeNextWorkerScript,
  RefHandlerCallback,
  ForwardWorkerAccessRequest,
  ForwardWorkerAccessResponse,
  ForwardMainTrigger,
  RunStateHandlers,
}

export interface ForwardMainTriggerData {
  $winId$: number;
  $instanceId$: number;
  $forward$: PartytownForwardProperty;
  $args$: SerializedTransfer | undefined;
}

export interface RefHandlerCallbackData {
  $winId$: number;
  $instanceId$: number;
  $refId$: number;
  $thisArg$: SerializedTransfer | undefined;
  $args$: SerializedTransfer | undefined;
}

export type PostMessageToWorker = (msg: MessageFromSandboxToWorker) => void;

export interface MainWindowContext {
  $winId$: number;
  $parentWinId$: number;
  $cleanupInc$: number;
  $config$: PartytownConfig | undefined;
  $interfaces$?: InterfaceInfo[];
  $isInitialized$?: boolean;
  $libPath$: string;
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
  $htmlConstructors$: string[];
  $interfaces$: InterfaceInfo[];
  $libPath$?: string;
  $url$: string;
}

export interface InitWebWorkerContext {
  $currentScriptId$: number;
  $currentScriptUrl$: string;
  $importScripts$: (...urls: string[]) => void;
  $isInitialized$?: boolean;
  $location$: Location;
  $postMessage$: (msg: MessageFromWorkerToSandbox) => void;
}

export type InterfaceInfo = [InterfaceType, string, MembersInterfaceTypeInfo];

export interface MembersInterfaceTypeInfo {
  [memberName: string]: InterfaceType;
}

export const enum InterfaceType {
  Window = 0, // (node type 0 not used, so using for Window interface)

  // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType

  Element = 1, // ELEMENT_NODE
  AttributeNode = 2, // ATTRIBUTE_NODE
  TextNode = 3, // TEXT_NODE
  CDataSectionNode = 4, // CDATA_SECTION_NODE

  Function = 5, // (node type 5 not used in the standard)
  NodeList = 6, // (node type 6 not used in the standard)

  ProcessingInstructionNode = 7, // PROCESSING_INSTRUCTION_NODE
  CommentNode = 8, // COMMENT_NODE
  Document = 9, // DOCUMENT_NODE
  DocumentTypeNode = 10, // DOCUMENT_TYPE_NODE
  DocumentFragmentNode = 11, // DOCUMENT_FRAGMENT_NODE

  CSSStyleDeclaration = 12,
  DOMStringMap = 13,
  DOMTokenList = 14,
  History = 15,
  MutationObserver = 16,
  NamedNodeMap = 17,
  Screen = 18,
  Storage = 19,
}

export const enum PlatformInstanceId {
  window,
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
  GlobalConstructor,
}

export interface MainAccessRequest {
  $msgId$: number;
  $winId$: number;
  $forwardToWorkerAccess$: boolean;
  $tasks$: MainAccessRequestTask[];
}

export interface MainAccessRequestTask {
  $instanceId$: number;
  $interfaceType$: InterfaceType;
  $nodeName$?: string;
  $accessType$: AccessType;
  $memberPath$: string[];
  $data$?: SerializedTransfer;
  $immediateSetters$?: ImmediateSetter[];
  $newInstanceId$?: number;
}

export type ImmediateSetter = [string[], SerializedTransfer | undefined];

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
  Function,
  Object,
  Primitive,
  Ref,
}

export type SerializedArrayTransfer = [SerializedType.Array, (SerializedTransfer | undefined)[]];

export type SerializedInstanceTransfer = [SerializedType.Instance, SerializedInstance];

export type SerializedFunctionTransfer = [SerializedType.Function];

export type SerializedObjectTransfer = [
  SerializedType.Object,
  { [key: string]: SerializedTransfer | undefined }
];

export type SerializedPrimitiveTransfer =
  | [SerializedType.Primitive, string | number | boolean | null | undefined]
  | [SerializedType.Primitive];

export type SerializedRefTransfer = [SerializedType.Ref, SerializedRefTransferData];

export interface SerializedRefTransferData {
  $winId$: number;
  $instanceId$: number;
  $refId$: number;
}

export type SerializedTransfer =
  | SerializedArrayTransfer
  | SerializedInstanceTransfer
  | SerializedFunctionTransfer
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

/**
 * @public
 */
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
   * [['dataLayer', 1], ['_hsq', 1], ['Intercom']]
   * ```
   */
  forward?: PartytownForwardProperty[];
  /**
   * Root directory the Partytown library files can be found.
   * The library path must end with a `/`.
   * By default the files will load from the server's `/~partytown/` directory.
   */
  lib?: string;
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

/**
 * The property to patch on `window`, such as `dataLayer` for Google Tag Manager.
 *
 * @public
 */
export type PartytownForwardPropertyName = string;

/**
 * The type of property which is patched on `window`. For example, Google Tag Manager's
 * `dataLayer` is an array, so it's type should be `1`. The default, which is `undefined`,
 * treats the property as a function.
 *
 * @public
 */
export type PartytownForwardPropertyType = PartytownForwardPropertyArrayType | undefined;

/**
 * Default foward property type, which sets the property as a function.
 *
 * @public
 */
export type PartytownForwardPropertyFunctionType = undefined;

/**
 * Sets the forward property as an array.
 *
 * @public
 */
export type PartytownForwardPropertyArrayType = 1;

/**
 * A foward property to patch on the global. The foward config property is an array,
 * with the value at index 0 being the property name to patch. Optionally, the value
 * at index 1 can set what type of property it is. By default it is patched as a
 * function, and when set to `1`, it is patched as an array.
 *
 * @public
 */
export type PartytownForwardProperty = [
  PartytownForwardPropertyName,
  PartytownForwardPropertyFunctionType?
];

export interface MainWindow extends Window {
  frameElement: MainFrameElement | null;
  partytown?: PartytownConfig;
  parent: MainWindow;
  top: MainWindow;
  _ptf?: any[];
  _ptWin?: (win: MainWindow) => void;
  _ptId?: number;
}

export interface MainFrameElement extends HTMLIFrameElement {
  _ptId?: number;
}

export const enum NodeName {
  Body = 'BODY',
  Comment = '#comment',
  Document = '#document',
  /**
   * <html>
   */
  DocumentElement = 'HTML',
  /**
   * <!DOCTYPE html>
   */
  DocumentTypeNode = 'html',
  DocumentFragment = '#document-fragment',
  IFrame = 'IFRAME',
  Head = 'HEAD',
  Script = 'SCRIPT',
  Text = '#text',
}

export const enum StateProp {
  errorHandlers = 'error',
  loadHandlers = 'load',
  href = 'href',
  instanceRefs = 0,
  isSuccessfulLoad = 1,
  partyWinId = 2,
  url = 3,
}

export type EventHandler = (ev: any) => void;

export type RefHandler = (...args: any[]) => void;

export type RefMap = Record<string, RefHandler>;

export type StateMap = Record<number, StateRecord>;

export type StateRecord = Record<string | number, any>;
