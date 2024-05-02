import questionnaireReducer from "./questionnaireReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  questionnaire: questionnaireReducer,
});

export default rootReducer;
