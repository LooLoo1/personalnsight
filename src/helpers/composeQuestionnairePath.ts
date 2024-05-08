import { QuestionsSchema } from 'types'

import { isQuestion } from './isQuestion'
import { toCamelCaseFromUnderscore } from './toCamelCaseFromUnderscore'

export const composeQuestionnairePath = (schema: QuestionsSchema[], id?: number, idNow?: number): string => {
  if (id) {
    const key = schema?.find((question) => question.id === id);
    if (isQuestion(key)) {
      return toCamelCaseFromUnderscore(key.responseKey);
    }
  }
  if (idNow) {
    return String(idNow);
  }
  return '';
};
