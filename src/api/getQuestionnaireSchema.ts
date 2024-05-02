import { QUESTIONS } from "constants/QUESTIONS";
import { QuestionsSchema } from "constants/types";

export const getQuestionnaireSchema = async (): Promise<QuestionsSchema[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(QUESTIONS);
    });
  });
};
