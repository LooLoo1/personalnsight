import type { RootState } from 'store';

export const questionnaireSelector = ({ questionnaire }: RootState) => questionnaire;
export const inProcessSelector = ({ questionnaire }: RootState) => questionnaire.inProcess;
export const answersSelector = ({ questionnaire }: RootState) => questionnaire.answers;
