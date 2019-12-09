import { combineReducers } from "redux";

import loadingReducer from "./loading";
import itemsReducer from "./items";

const rootReducer = combineReducers({
  loadingReducer,
  itemsReducer
});

export default rootReducer;
