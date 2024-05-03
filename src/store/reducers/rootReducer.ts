import questionnaireReducer from "./questionnaireReducer";

import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  questionnaire: questionnaireReducer,
});
