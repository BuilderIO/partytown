export type CreateWorker = (workerName: string) => Worker;

export interface InitWebWorkerData {
  $config$: PartytownConfig;
  $documentCookie$: string;
  $documentReferrer$: string;
  $documentReadyState$: string;
  $firstScriptId$: number;
  $initializeScripts$: InitializeScriptData[];
  $key$: number;
  $methodNames$: string[];
  $scopePath$: string;
  $url$: string;
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
  Apply,
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
  $memberName$?: string;
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

export interface SerializedMembers {
  [propName: string]: SerializedValueTransfer;
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
  $cstr$: SerializedConstructorType;
  $instanceId$?: number;
}

export const enum SerializedConstructorType {
  Element = 1, // same as NodeType
  HTMLCollection = 2,
  TextNode = 3, // same as NodeType
  CommentNode = 8, // same as NodeType
  DocumentFragmentNode = 11, // same as NodeType
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
