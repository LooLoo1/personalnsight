import { Question } from 'types';

export const isQuestion = (obj: unknown): obj is Question => {
  return typeof obj === 'object' && obj !== null;
};
