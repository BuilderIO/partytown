import type { WorkerDocument } from './web-worker/worker-document';
import type { WorkerHistory } from './web-worker/worker-history';
import type { WorkerLocation } from './web-worker/worker-location';
import type { WorkerStorage } from './web-worker/worker-storage';

export type CreateWorker = (workerName: string) => Worker;

export type WebWorkerRequestToSandboxMessage = [WebWorkerMessageToSandbox, number, number];

export const enum WebWorkerMessageToSandbox {
  MainDataRequest,
  ScriptInitialized,
}

export const enum SandboxMessageToWebWorker {
  MainDataResponse,
  InitializeNextScript,
}

export type WebWorkerResponseFromSandboxMessage =
  | [SandboxMessageToWebWorker, any]
  | [SandboxMessageToWebWorker];

export interface InitWebWorkerData {
  $config$: PartytownConfig;
  $documentCompatMode$: string;
  $documentCookie$: string;
  $documentReadyState$: string;
  $documentReferrer$: string;
  $documentTitle$: string;
  $firstScriptId$: number;
  $initializeScripts$: InitializeScriptData[];
  $interfaces$: InterfaceInfo[];
  $scopePath$: string;
  $url$: string;
}

export interface InitWebWorkerContext {
  $currentScript$?: number;
  $document$?: WorkerDocument;
  $history$?: WorkerHistory;
  $importScripts$?: (...urls: string[]) => void;
  $localStorage$?: WorkerStorage;
  $location$?: WorkerLocation;
  $sessionStorage$?: WorkerStorage;
}

export type InterfaceInfo = [InterfaceType, MemberTypeInfo];

export interface MemberTypeInfo {
  [memberName: string]: InterfaceType;
}

export const enum InterfaceType {
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

export const enum InstanceId {
  history = 0,
  localStorage = 1,
  sessionStorage = 2,
  window = 3,
  document = 4,
  documentElement = 5,
  head = 6,
  body = 7,
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

export interface MainAccessRequest {
  $msgId$: number;
  $accessType$: AccessType;
  $instanceId$: number;
  $memberPath$?: string[];
  $data$?: any;
  $extraInstructions$?: ExtraInstruction[];
}

export const enum ExtraInstruction {
  SET_INERT_IMG,
  SET_INERT_SCRIPT,
  SET_PARTYTOWN_ID,
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
  /** Node Name */
  $data$: string;
}

export interface SerializedNodeList extends SerializedInstance {
  $data$: SerializedNode[];
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
  partytown?: PartytownConfig;
}

export const enum NodeName {
  Comment = '#comment',
  Document = '#document',
  DocumentFragment = '#document-fragment',
  Text = '#text',
}
