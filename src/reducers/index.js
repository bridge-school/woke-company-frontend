import { combineReducers } from "redux";
// REDUX FORM
import { reducer as formReducer } from "redux-form";
// REDUCERS
import datePicker from "./datePicker";

// rootReducer is our parent reducer that takes in our child reducers
// use the combineReducers to comine multiple reducers into one parent reducer
const rootReducer = combineReducers({
  datePicker,
  form: formReducer
});

// export rootReducer
export default rootReducer;
