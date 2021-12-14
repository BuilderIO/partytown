export type CreateWorker = (workerName: string) => Worker;

export type Messenger = (
  sandboxWindow: Window,
  receiveMessage: MessengerRequestCallback
) => Promise<MessengerHandler | null>;

export type MessengerRequestCallback = (
  accessReq: MainAccessRequest,
  responseCallback: MessengerResponseCallback
) => void;

export type MessengerHandler = (
  worker: PartytownWebWorker,
  mainWindow: MainWindow,
  msg: MessageFromWorkerToSandbox
) => void;

export type MessengerResponseCallback = (accessRsp: MainAccessResponse) => void;

export type WinId = number;

export type MessageFromWorkerToSandbox =
  | [WorkerMessageType.MainDataRequestFromWorker]
  | [WorkerMessageType.InitializedWebWorker]
  | [WorkerMessageType.InitializedEnvironmentScript, WinId, number, string]
  | [WorkerMessageType.InitializeNextScript, WinId]
  | [WorkerMessageType.ForwardWorkerAccessRequest, MainAccessRequest]
  | [WorkerMessageType.AsyncAccessRequest, MainAccessRequest];

export type MessageFromSandboxToWorker =
  | [WorkerMessageType.MainDataResponseToWorker, InitWebWorkerData]
  | [WorkerMessageType.InitializeEnvironment, InitializeEnvironmentData]
  | [WorkerMessageType.InitializedEnvironment, WinId]
  | [WorkerMessageType.InitializeNextScript, InitializeScriptData]
  | [WorkerMessageType.RefHandlerCallback, RefHandlerCallbackData]
  | [WorkerMessageType.ForwardMainTrigger, ForwardMainTriggerData]
  | [WorkerMessageType.LocationUpdate, number, string];

export const enum WorkerMessageType {
  MainDataRequestFromWorker,
  MainDataResponseToWorker,
  InitializedWebWorker,
  InitializeEnvironment,
  InitializedEnvironment,
  InitializedEnvironmentScript,
  InitializeNextScript,
  RefHandlerCallback,
  ForwardMainTrigger,
  ForwardWorkerAccessRequest,
  AsyncAccessRequest,
  LocationUpdate,
}

export interface ForwardMainTriggerData {
  $winId$: number;
  $forward$: string[];
  $args$: SerializedTransfer | undefined;
}

export interface RefHandlerCallbackData {
  $instanceId$: number;
  $refId$: number;
  $thisArg$: SerializedTransfer | undefined;
  $args$: SerializedTransfer | undefined;
}

export type PostMessageToWorker = (msg: MessageFromSandboxToWorker) => void;

export interface MainWindowContext {
  $winId$: number;
  $isInitialized$?: number;
  $startTime$?: number;
  $window$: MainWindow;
}

export interface PartytownWebWorker extends Worker {
  postMessage: PostMessageToWorker;
}

export interface InitWebWorkerData {
  $config$: string;
  $interfaces$: InterfaceInfo[];
  $libPath$: string;
  $sharedDataBuffer$?: SharedArrayBuffer;
  $localStorage$: StorageItem[];
  $sessionStorage$: StorageItem[];
}

/**
 * [0] Constructor name
 * [1] Prototype parent construtor name
 * [2] InterfaceMember[]
 * [3]? Node Name
 */
export type InterfaceInfo =
  | [string, string, InterfaceMember[], InterfaceType, string]
  | [string, string, InterfaceMember[]];

/**
 * [0] Member name
 * [1] Constructor name or interface type
 * [2]? If there's a value it's a static prop
 */
export type InterfaceMember =
  | [string, string]
  | [string, InterfaceType.Function]
  | [string, InterfaceType.Property]
  | [string, InterfaceType.Property, string | number | boolean];

export interface WebWorkerContext {
  $config$: PartytownConfig;
  $forwardedTriggers$: string[];
  $htmlConstructors$: InterfaceInfo[];
  $isInitialized$?: number;
  $libPath$: string;
  $localStorage$: StorageItem[];
  $postMessage$: (msg: MessageFromWorkerToSandbox) => void;
  $sessionStorage$: StorageItem[];
  $sharedDataBuffer$?: SharedArrayBuffer;
  $windowMembers$: MembersInterfaceTypeInfo;
  $windowMemberNames$: string[];
  lastLog?: string;
}

export interface InitializeEnvironmentData {
  $winId$: number;
  $parentWinId$: number;
  $url$: string;
}

export interface WebWorkerEnvironment extends Omit<InitializeEnvironmentData, '$url$'> {
  $window$: Window;
  $document$: Document;
  $documentElement$: HTMLElement;
  $head$: HTMLElement;
  $body$: HTMLElement;
  $location$: Location;
  $currentScriptId$?: number;
  $isInitialized$?: number;
}

export interface WebWorkerGlobal {
  $memberName$: string;
  $interfaceType$: InterfaceType;
  $implementation$: any;
}

export interface MembersInterfaceTypeInfo {
  [memberName: string]: InterfaceType;
}

export const enum InterfaceType {
  // NodeType 0 not used, so using for Window interface
  Window = 0,

  // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
  Element = 1,
  AttributeNode = 2,
  TextNode = 3,
  CDataSectionNode = 4,

  // NodeType 5 and 6 not used in the standards
  Function = 5,
  Property = 6,

  ProcessingInstructionNode = 7,
  CommentNode = 8,
  Document = 9,
  DocumentTypeNode = 10,
  DocumentFragmentNode = 11,

  // Global Constructors and window function implementations
  EnvGlobalConstructor = 12,
}

export const enum PlatformInstanceId {
  window,
  document,
  documentElement,
  head,
  body,
}

export interface InitializeScriptData {
  $winId$: number;
  $instanceId$: number;
  $content$?: string;
  $url$?: string;
}

export interface MainAccessRequest {
  $msgId$: number;
  $tasks$: MainAccessTask[];
}

export interface MainAccessTask {
  $winId$: number;
  $instanceId$: number;
  $applyPath$: ApplyPath;
  $groupedGetters$?: string[];
  $assignInstanceId$?: number;
}

export interface MainAccessResponse {
  $msgId$: number;
  $error$?: string;
  $rtnValue$?: SerializedTransfer;
  $isPromise$?: any;
}

export const enum ApplyPathType {
  SetValue,
  GlobalConstructor,
}

export type ApplyPath = any[];

export const enum SerializedType {
  Array,
  Attr,
  CSSRule,
  CSSRuleList,
  Event,
  Function,
  Instance,
  NodeList,
  Object,
  Primitive,
  Ref,
}

export type SerializedArrayTransfer = [SerializedType.Array, (SerializedTransfer | undefined)[]];

export type SerializedAttrTransfer = [SerializedType.Attr, SerializedAttr];

export type SerializedCSSRuleTransfer = [SerializedType.CSSRule, SerializedCSSRule];

export type SerializedCSSRuleListTransfer = [SerializedType.CSSRuleList, SerializedCSSRule[]];

export type SerializedEventTransfer = [SerializedType.Event, SerializedObject];

export type SerializedFunctionTransfer = [SerializedType.Function];

export type SerializedInstanceTransfer = [SerializedType.Instance, SerializedInstance];

export type SerializedNodeListTransfer = [
  SerializedType.NodeList,
  (SerializedTransfer | undefined)[]
];

export type SerializedObjectTransfer = [
  SerializedType.Object,
  { [key: string]: SerializedTransfer | undefined }
];

export type SerializedAttr = [string, string];

export type SerializedCSSRule = { [key: string]: string };

export type SerializedPrimitiveTransfer =
  | [SerializedType.Primitive, string | number | boolean | null | undefined]
  | [SerializedType.Primitive];

export type SerializedRefTransfer = [SerializedType.Ref, SerializedRefTransferData];

export interface SerializedRefTransferData {
  $winId$: number;
  $instanceId$: number;
  $nodeName$?: string;
  $refId$: number;
}

export type SerializedTransfer =
  | SerializedArrayTransfer
  | SerializedAttrTransfer
  | SerializedCSSRuleTransfer
  | SerializedCSSRuleListTransfer
  | SerializedEventTransfer
  | SerializedFunctionTransfer
  | SerializedInstanceTransfer
  | SerializedNodeListTransfer
  | SerializedObjectTransfer
  | SerializedPrimitiveTransfer
  | SerializedPrimitiveTransfer
  | SerializedRefTransfer
  | [];

export interface SerializedObject {
  [key: string]: SerializedTransfer | undefined;
}

export interface SerializedInstance {
  $winId$: number;
  $instanceId$: number;
  /**
   * Node name for Node instances
   */
  $nodeName$?: string;
  /**
   * Instance data
   */
  $data$?: any;
}

/**
 * @public
 */
export interface PartytownConfig {
  /**
   * The `resolveUrl()` hook can be used to modify the URL about to be
   * requested, which could be used to rewrite urls so they go through a proxy.
   *
   * @param url - The URL to be resolved. This is a URL https://developer.mozilla.org/en-US/docs/Web/API/URL, not a string.
   * @param location - The current window location.
   * @returns The returned value must be a URL interface, otherwise the default resolved URL is used.
   */
  resolveUrl?(url: URL, location: Location): URL | undefined | null;
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
  get?: GetHook;
  set?: SetHook;
  apply?: ApplyHook;
  /**
   * An absolute path to the root directory which Partytown library files
   * can be found. The library path must start and end with a `/`.
   * By default the files will load from the server's `/~partytown/` directory.
   * Note that the library path must be on the same origin as the html document,
   * and is also used as the `scope` of the Partytown service worker.
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
   * Log calls to main access, which also shows how many tasks were sent per message (debug mode required)
   */
  logMainAccess?: boolean;
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
 * The property to patch on `window`, such as `dataLayer` for Google Tag Manager,
 * or `fbq` for Facebook Pixel.
 *
 * @public
 */
export type PartytownForwardPropertyName = string;

/**
 * A foward property to patch on the global. The foward config property is an array,
 * with the value at index 0 being the property name to patch. Optionally, the value
 * at index 1 can set what type of property it is. By default it is patched as a
 * function, and when set to `1`, it is patched as an array.
 *
 * @public
 */
export type PartytownForwardProperty = string;

/**
 * @public
 */
export type GetHook = (opts: GetHookOptions) => any;

/**
 * @public
 */
export type SetHook = (opts: SetHookOptions) => any;

/**
 * @public
 */
export type ApplyHook = (opts: ApplyHookOptions) => any;

export interface HookOptions {
  name: string;
  continue: Symbol;
  nodeName: string | undefined;
  constructor: string | undefined;
}

/**
 * @public
 */
export interface GetHookOptions extends HookOptions {}

/**
 * @public
 */
export interface SetHookOptions extends HookOptions {
  value: any;
  prevent: Symbol;
}

/**
 * @public
 */
export interface ApplyHookOptions extends HookOptions {
  args: any[];
}

export interface MainWindow extends Window {
  partytown?: PartytownConfig;
  _ptf?: any[];
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
  loadErrorStatus = 1,
  cssRules = 2,
  innerHTML = 3,
  url = 4,
}

export type EventHandler = (ev: any) => void;

export type RefHandler = (...args: any[]) => void;

export type StateMap = Record<number, StateRecord>;

export type StateRecord = Record<string | number, any>;

export type StorageItem = [/*key*/ string, /*value*/ string];
