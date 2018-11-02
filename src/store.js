import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";

// import root reducer
import rootReducer from "./reducers/index";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

// enchancer for our redux dev tools
const enhancer = composeEnhancers(
  applyMiddleware(thunk, logger
  )
  // other store enhancers if any
);

// export our store with our rootReducer and enhancer
export default createStore(rootReducer, enhancer);
