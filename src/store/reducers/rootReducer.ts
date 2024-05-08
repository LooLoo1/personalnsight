import { combineReducers } from 'redux'

import questionnaireReducer from './questionnaireReducer'

export const rootReducer = combineReducers({
  questionnaire: questionnaireReducer,
});
