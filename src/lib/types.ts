export type CreateWorker = (workerName: string) => Worker;

export type Messenger = (
  receiveMessage: MessengerRequestCallback
) => Promise<MessengerHandler | null>;

export type MessengerRequestCallback = (
  accessReq: MainAccessRequest,
  responseCallback: MessengerResponseCallback
) => void;

export type MessengerHandler = (
  worker: PartytownWebWorker,
  msg: MessageFromWorkerToSandbox
) => void;

export type MessengerResponseCallback = (accessRsp: MainAccessResponse) => void;

export type WinId = number;

export type MessageFromWorkerToSandbox =
  | [type: WorkerMessageType.MainDataRequestFromWorker]
  | [type: WorkerMessageType.InitializedWebWorker]
  | [
      type: WorkerMessageType.InitializedEnvironmentScript,
      winid: WinId,
      instanceId: number,
      errorMsg: string
    ]
  | [type: WorkerMessageType.InitializeNextScript, winId: WinId]
  | [type: WorkerMessageType.ForwardWorkerAccessRequest, accessReq: MainAccessRequest]
  | [type: WorkerMessageType.AsyncAccessRequest, accessReq: MainAccessRequest];

export type MessageFromSandboxToWorker =
  | [WorkerMessageType.MainDataResponseToWorker, InitWebWorkerData]
  | [WorkerMessageType.InitializeEnvironment, InitializeEnvironmentData]
  | [WorkerMessageType.InitializeNextScript, InitializeScriptData]
  | [WorkerMessageType.InitializedScripts, WinId]
  | [WorkerMessageType.RefHandlerCallback, RefHandlerCallbackData]
  | [WorkerMessageType.ForwardMainTrigger, ForwardMainTriggerData]
  | [WorkerMessageType.LocationUpdate, number, string];

export const enum WorkerMessageType {
  MainDataRequestFromWorker,
  MainDataResponseToWorker,
  InitializedWebWorker,
  InitializeEnvironment,
  InitializedEnvironmentScript,
  InitializeNextScript,
  InitializedScripts,
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
  $winId$: number;
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
 * [1] Prototype parent constructor name
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
  $importScripts$: (...urls: string[]) => void;
  $isInitialized$?: number;
  $libPath$: string;
  $postMessage$: (msg: MessageFromWorkerToSandbox, arr?: any[]) => void;
  $sharedDataBuffer$?: SharedArrayBuffer;
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
  $isLoading$?: number;
  $runWindowLoadEvent$?: number;
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
  $orgUrl$?: string;
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
  $debug$?: string;
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
  Primitive,
  Array,
  Object,
  Instance,
  Ref,
  Event,
  Function,
  NodeList,
  ArrayBuffer,
  ArrayBufferView,
  Attr,
  CSSRule,
  CSSRuleList,
  CSSStyleDeclaration,
}

export type SerializedArrayTransfer = [SerializedType.Array, (SerializedTransfer | undefined)[]];

export type SerializedArrayBufferTransfer = [SerializedType.ArrayBuffer, any];

export type SerializedArrayBufferViewTransfer = [SerializedType.ArrayBufferView, any, string];

export type SerializedAttrTransfer = [SerializedType.Attr, SerializedAttr];

export type SerializedCSSRuleTransfer = [SerializedType.CSSRule, SerializedCSSRule];

export type SerializedCSSRuleListTransfer = [SerializedType.CSSRuleList, SerializedCSSRule[]];

export type SerializedCSSStyleDeclarationTransfer = [
  SerializedType.CSSStyleDeclaration,
  { [key: string]: SerializedTransfer | undefined }
];

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
  | SerializedArrayBufferTransfer
  | SerializedArrayBufferViewTransfer
  | SerializedAttrTransfer
  | SerializedCSSRuleTransfer
  | SerializedCSSRuleListTransfer
  | SerializedCSSStyleDeclarationTransfer
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
 * https://partytown.builder.io/configuration
 *
 * @public
 */
export interface PartytownConfig {
  /**
   * The `resolveUrl()` hook can be used to modify the URL about to be
   * requested, which could be used to rewrite urls so they go through a proxy.
   *
   * https://partytown.builder.io/proxying-requests
   *
   * @param url - The URL to be resolved. This is a URL https://developer.mozilla.org/en-US/docs/Web/API/URL, not a string.
   * @param location - The current window location.
   * @returns The returned value must be a URL interface, otherwise the default resolved URL is used.
   */
  resolveUrl?(url: URL, location: Location): URL | undefined | null;
  /**
   * When set to `true`, Partytown scripts are not inlined and not minified.
   *
   * https://partytown.builder.io/debugging
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
   * Below is an example of Google Tag Manager and Facebook Pixel:
   *
   * ```js
   * ['dataLayer.push', 'fbq']
   * ```
   *
   * https://partytown.builder.io/forwarding-events
   */
  forward?: PartytownForwardProperty[];
  /**
   * Rarely, a script will add a named function to the global scope with the
   * intent that other scripts can call the named function (like Adobe Launch).
   * Due to how Partytown scopes each script, these named functions do not get
   * added to `window`. The `globalFns` config can be used to manually ensure
   * each function is added to the global scope. Consider this an escape hatch
   * when a third-party script rudely pollutes `window` with functions.
   */
  globalFns?: string[];
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
 * A foward property to patch on `window`. The foward config property is an string,
 * representing the call to forward, such as `dataLayer.push` or `fbq`.
 *
 * https://partytown.builder.io/forwarding-events
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
  type = 5,
}

export type EventHandler = (ev: any) => void;

export type RefHandler = (...args: any[]) => void;

export type StateMap = Record<number, StateRecord>;

export type StateRecord = Record<string | number, any>;

export type StorageItem = [/*key*/ string, /*value*/ string];

export const enum CallType {
  Blocking = 1,
  NonBlocking = 2,
  NonBlockingNoSideEffect = 3,
}

export type Getter = (instance: any, applyPath: ApplyPath, groupedGetters?: string[]) => any;

export type Setter = (instance: any, applyPath: ApplyPath, value: any) => void;

export type CallMethod = (
  instance: any,
  applyPath: ApplyPath,
  args: any[],
  callType?: CallType,
  assignInstanceId?: number,
  buffer?: ArrayBuffer | ArrayBufferView
) => any;

export type ConstructGlobal = (instance: any, cstrName: string, args: any[]) => void;

export type DefinePrototypePropertyDescriptor = (Cstr: any, propertyDescriptorMap: any) => void;

export type RandomId = () => number;

import type { ApplyPathKey, InstanceIdKey, WinIdKey } from './web-worker/worker-constants';
import type { WorkerEventTargetProxy, WorkerInstance } from './web-worker/worker-instance';

export type LazyBridge = [
  Getter,
  Setter,
  CallMethod,
  ConstructGlobal,
  DefinePrototypePropertyDescriptor,
  RandomId,
  typeof WorkerInstance,
  typeof WorkerEventTargetProxy,
  typeof WinIdKey,
  typeof InstanceIdKey,
  typeof ApplyPathKey
];

export type InitLazyMediaConstructor = (
  env: WebWorkerEnvironment,
  winInstance: any,
  CstrName: string
) => any;

export interface InitLazyMediaConstructors {
  [CstrName: string]: InitLazyMediaConstructor;
}

export interface MediaSelf {
  ptm?: LazyBridge;
}

export interface PostMessageData {
  $winId$: number;
  $data$: string;
}
