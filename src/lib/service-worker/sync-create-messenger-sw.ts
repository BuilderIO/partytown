import {
  MainAccessRequest,
  MessageFromWorkerToSandbox,
  Messenger,
  PartytownWebWorker,
  WorkerMessageType,
} from '../types';
import { onMessageFromWebWorker } from '../sandbox/on-messenge-from-worker';
import { readMainInterfaces, readMainPlatform } from '../sandbox/read-main-platform';

type AnyObject = { [key: string]: any };

function getTag(value: any): string {
  if (value == null) {
    return value === undefined ? "[object Undefined]" : "[object Null]";
  }
  return Object.prototype.toString.call(value);
}

function isObjectLike(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isPlainObject(value: any): boolean {
  if (!isObjectLike(value) || getTag(value) !== "[object Object]") {
    return false;
  }
  if (Object.getPrototypeOf(value) === null) {
    return true;
  }
  let proto = value;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(value) === proto;
}

function isSerializable(obj: AnyObject, path: string[] = []): boolean {
  let isNestedSerializable: boolean;
  let isSerializableFlag = true;

  function isPlain(val: any): boolean {
    return (
      typeof val === "undefined" ||
      typeof val === "string" ||
      typeof val === "boolean" ||
      typeof val === "number" ||
      Array.isArray(val) ||
      isPlainObject(val)
    );
  }

  for (const property in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, property)) {
      const currentPath = [...path, property];
      const value = obj[property];

      if (!isPlain(value)) {
        console.log(
          `Non-Serializable Property: ${currentPath.join(".")} of type ${typeof value}`
        );
        if (typeof value === 'function') {
          console.log(`Function Name: ${value.name}`); }
        console.log(
          "Parent Object:",
          JSON.stringify(obj, (key, val) =>
            typeof val === "function" ? val.toString() : val
          )
        );
        isSerializableFlag = false;
      }

      if (isObjectLike(value)) {
        isNestedSerializable = isSerializable(value, currentPath);
        if (!isNestedSerializable) {
          isSerializableFlag = false;
        }
      }
    }
  }

  return isSerializableFlag;
}


const createMessengerServiceWorker: Messenger = (receiveMessage) => {
  const swContainer = window.navigator.serviceWorker;
  return swContainer.getRegistration().then((swRegistration) => {
    swContainer.addEventListener('message', (ev: MessageEvent<MainAccessRequest>) =>
      receiveMessage(
        ev.data,
        (accessRsp) => swRegistration!.active && swRegistration!.active.postMessage(accessRsp)
      )
    );

    return (worker: PartytownWebWorker, msg: MessageFromWorkerToSandbox) => {
      if (msg[0] === WorkerMessageType.MainDataRequestFromWorker) {
          console.log("This is the main message - where the bug occurs");
          console.log("Sending message:", JSON.stringify(msg));
          console.log(JSON.stringify(readMainPlatform()));
          let mainPlatformRes = readMainPlatform();
          console.log({ mainPlatformRes });
          console.log("Is main platform result serializable: ", isSerializable(mainPlatformRes));
      }
      if (msg[0] === WorkerMessageType.MainDataRequestFromWorker) {
        // web worker has requested the initial data from the main thread
        // collect up info about the main thread interfaces
        // send the main thread interface data to the web worker
        worker.postMessage([WorkerMessageType.MainDataResponseToWorker, readMainPlatform()]);
      } else if (msg[0] === WorkerMessageType.MainInterfacesRequestFromWorker) {
        // web worker has requested the rest of the html/svg interfaces
        worker.postMessage([
          WorkerMessageType.MainInterfacesResponseToWorker,
          readMainInterfaces(),
        ]);
      } else {
        onMessageFromWebWorker(worker, msg);
      }
    };
  });
};

export default createMessengerServiceWorker;
