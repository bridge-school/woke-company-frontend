import { combineReducers } from "redux";
// REDUX FORM
import { reducer as formReducer } from "redux-form";
// REDUCERS
import navHamburgerReducer from "./navHamburger";
import checklistReducer from "./checklist.js";
import companiesReducer from "./companies.js";

const rootReducer = combineReducers({
  form: formReducer,
  navHamburger: navHamburgerReducer,
  checklist: checklistReducer,
  companies: companiesReducer
});

// export rootReducer
export default rootReducer;