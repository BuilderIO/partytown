import type { WorkerDocument } from './web-worker/worker-document';
import type { WorkerHistory } from './web-worker/worker-history';
import type { WorkerLocation } from './web-worker/worker-location';
import type { WorkerStorage } from './web-worker/worker-storage';

export type CreateWorker = (workerName: string) => Worker;

export type MessageFromWorkerToSandbox =
  | [WorkerMessageType.MainDataRequestFromWorker]
  | [WorkerMessageType.WorkerInitialized]
  | [WorkerMessageType.InitializeNextWorkerScript];

export type MessageFromSandboxToWorker =
  | [WorkerMessageType.MainDataResponseToWorker, InitWebWorkerData]
  | [WorkerMessageType.InitializeNextWorkerScript]
  | [WorkerMessageType.RefHandlerCallback, number, SerializedTransfer, SerializedTransfer];

export const enum WorkerMessageType {
  MainDataRequestFromWorker,
  MainDataResponseToWorker,
  WorkerInitialized,
  InitializeNextWorkerScript,
  RefHandlerCallback,
}

export type PostMessageToWorker = (msg: MessageFromSandboxToWorker) => void;

export interface MainContext {
  $body$: HTMLElement;
  $config$: PartytownConfig;
  $document$: Document;
  $documentElement$: HTMLElement;
  $head$: HTMLElement;
  $history$: History;
  $localStorage$: Storage;
  $sandboxDocument$: Document;
  $sandboxWindow$: Window;
  $sessionStorage$: Storage;
  $url$: string;
  $window$: Window;
  $workerPostMessage$: PostMessageToWorker[];
}

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
  $memberPath$: string[];
  $data$: SerializedTransfer;
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
  $rtnValue$?: SerializedTransfer;
  $isPromise$?: any;
  $error$?: string;
}

export const enum SerializedType {
  Array,
  Instance,
  InstanceById,
  Method,
  Object,
  Primitive,
  Ref,
}

export type SerializedArrayTransfer = [SerializedType.Array, SerializedTransfer[]];

export type SerializedInstanceTransfer = [SerializedType.Instance, SerializedInstance];

export type SerializedInstanceByIdTransfer = [SerializedType.InstanceById, number];

export type SerializedMethodTransfer = [SerializedType.Method];

export type SerializedObjectTransfer = [
  SerializedType.Object,
  { [key: string]: SerializedTransfer }
];

export type SerializedPrimitiveTransfer = [
  SerializedType.Primitive,
  string | number | boolean | null | undefined
];

export type SerializedRefTransfer = [SerializedType.Ref, number];

export type SerializedTransfer =
  | SerializedArrayTransfer
  | SerializedInstanceTransfer
  | SerializedInstanceByIdTransfer
  | SerializedMethodTransfer
  | SerializedObjectTransfer
  | SerializedPrimitiveTransfer
  | SerializedPrimitiveTransfer
  | SerializedRefTransfer
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
