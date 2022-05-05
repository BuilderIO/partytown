import { LocationUpdateData, LocationUpdateType, WebWorkerEnvironment } from "../types";
import { HistoryChangePrevent } from "./worker-constants";

const isObject = (value: any) => typeof value === 'object' && value !== null;

type PopStateEvent = Event & {
  state?: LocationUpdateData['state'];
};
type HashChangeEvent = Event & {
  newURL?: LocationUpdateData['newUrl'],
  oldURL?: LocationUpdateData['oldUrl']
};

export function forwardLocationChange($winId$: number, env: WebWorkerEnvironment, data: LocationUpdateData) {
  const history = env.$window$.history;

  switch (data.type) {
    case LocationUpdateType.PushState: {
      if (isObject(data.state)) {
        history.pushState({...data.state, [HistoryChangePrevent]: true}, '', data.newUrl)
      }
      break;
    }
    case LocationUpdateType.ReplaceState: {
      if (isObject(data.state)) {
        history.replaceState({...data.state, [HistoryChangePrevent]: true}, '', data.newUrl)
      }
      break;
    }
    case LocationUpdateType.PopState: {
      // FIXME: This WILL cause infinite loop for now
      // debugger;
      const event: PopStateEvent = new Event('popstate');
      event.state = data.state;
      env.$window$.dispatchEvent(event);
      break;
    }
    case LocationUpdateType.HashChange: {
      // FIXME: This WILL cause infinite loop for now
      // debugger;
      const event: HashChangeEvent = new Event('hashchange', )
      event.newURL = data.newUrl;
      event.oldURL = data.oldUrl;
      env.$window$.dispatchEvent(event);
      break
    }
  }
}
