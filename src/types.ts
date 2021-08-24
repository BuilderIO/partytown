export type CreateWorker = (workerName: string) => Worker;

export const enum WebWorkerRequestFromMain {
  MainDataRequest,
  NextScriptRequest,
}

export const enum WebWorkerResponseFromMain {
  MainDataResponse,
  NextScriptResponse,
}

export type WebWorkerResponseFromMainMessage =
  | [WebWorkerResponseFromMain, any]
  | [WebWorkerResponseFromMain];

export interface InitWebWorkerData {
  $config$: PartytownConfig;
  $documentCookie$: string;
  $documentReferrer$: string;
  $documentReadyState$: string;
  $firstScriptId$: number;
  $initializeScripts$: InitializeScriptData[];
  $key$: number;
  $interfaces$: InterfaceInfo[];
  $scopePath$: string;
  $url$: string;
}

export type InterfaceInfo = [InterfaceType, MemberTypeInfo];

export interface MemberTypeInfo {
  [memberName: string]: InterfaceType;
}

export const enum InterfaceType {
  Element = 1, // same as NodeType,
  Method = 2,
  TextNode = 3, // same as NodeType
  NamedNodeMap = 4,
  DOMStringMap = 5,
  DOMTokenList = 6,
  HTMLCollection = 7,
  Document = 9, // same as NodeType,
}

export interface InitWebWorkerContext {
  $currentScript$?: number;
  $importScripts$?: (...urls: string[]) => void;
  $msgId$: number;
}

export interface WebWorkerContext extends InitWebWorkerData, InitWebWorkerContext {}

export interface WorkerGroups {
  [workerName: string]: InitializeScriptData[];
}

export interface InitializeScriptData {
  $instanceId$: number;
  $content$?: string;
  $url$?: string;
}

export const enum AccessType {
  Get,
  Set,
  CallMethod,
}

export const enum InstanceId {
  window = 0,
  document = 1,
}

export interface MainAccessRequest {
  $key$: number;
  $msgId$: number;
  $accessType$: AccessType;
  $instanceId$: number;
  $memberPath$?: string[];
  $data$?: any;
  $extraInstructions$?: ExtraInstruction[];
}

export interface ExtraInstruction {
  $setAttributeName$?: string;
  $setAttributeValue$?: string | number | boolean;
  $setPartytownId$?: boolean;
}

export interface MainAccessResponse {
  $msgId$: number;
  $instanceId$: number;
  $rtnValue$?: SerializedValueTransfer;
  $isPromise$?: any;
  $error$?: string;
}

export const enum SerializedType {
  Window,
  Document,
  Method,
  Primitive,
  Array,
  Object,
  Instance,
}

export type SerializedValueTransfer =
  | [SerializedType.Window]
  | [SerializedType.Document]
  | [SerializedType.Method]
  | [SerializedType.Primitive, string | number | boolean]
  | [SerializedType.Array, SerializedValueTransfer[]]
  | [SerializedType.Instance, SerializedInstance]
  | [SerializedType.Object, any]
  | [];

export interface SerializedInstance {
  $interfaceType$: InterfaceType;
  $instanceId$?: number;
}

export interface SerializedNode extends SerializedInstance {
  $nodeName$: string;
}

export interface SerializedHTMLCollection extends SerializedInstance {
  $data$: SerializedNode[];
}

export interface PartytownConfig {
  logCalls?: boolean;
  logGetters?: boolean;
  logSetters?: boolean;
  logStackTraces?: boolean;
}

export interface MainWindow extends Window {
  partytown?: PartytownConfig;
}

export const enum NodeName {
  Comment = '#comment',
  Document = '#document',
  DocumentFragment = '#document-fragment',
  Text = '#text',
}
