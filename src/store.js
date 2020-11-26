import {
  configureStore,
  combineReducers, // redux의 그것과 같다.
} from "@reduxjs/toolkit";

import { createBrowserHistory } from "history";
import { routerMiddleware, connectRouter } from "connected-react-router";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
});

export default () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [routerMiddleware(history)],
  });

  return store;
};
