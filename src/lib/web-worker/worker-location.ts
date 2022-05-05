import { LocationUpdateData, LocationUpdateType, WebWorkerEnvironment } from "../types";
import { HistoryChangePrevent } from "./worker-constants";

const isObject = (value: any) => typeof value === 'object' && value !== null;

export function forwardLocationChange ($winId$: number, env: WebWorkerEnvironment, data: LocationUpdateData) {
  const history = env.$window$.history;

  switch (data.type) {
    case LocationUpdateType.PushState: {
      if (isObject(data.state)) {
        history.pushState({ ...data.state, [HistoryChangePrevent]: true }, '', data.newUrl)
      }
      break;
    }
    case LocationUpdateType.ReplaceState: {
      if (isObject(data.state)) {
        history.replaceState({...data.state, [HistoryChangePrevent]: true}, '', data.newUrl)
      }
      break;
    }
    case LocationUpdateType.PopState:
    case LocationUpdateType.HashChange:
      break
  }
}
