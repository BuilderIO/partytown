declare module '@sandbox' {
  const str: string;
  export default str;
}

declare module '@sandbox-debug' {
  const str: string;
  export default str;
}

declare module '@snippet' {
  const str: string;
  export default str;
}

declare module '@sync-create-messenger' {
  export default function (sandboxWindow: any, receiveMessage: any): Promise<any>;
}

declare module '@sync-send-message-to-main' {
  export default function (webWorkerCtx: any, accessReq: any): any;
}

declare module '@web-worker-blob' {
  const str: string;
  export default str;
}
