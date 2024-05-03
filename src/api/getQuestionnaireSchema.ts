import { QUESTIONS } from "constants/questions";
import { QuestionsSchema } from "types";

export const getQuestionnaireSchema = async (): Promise<QuestionsSchema[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(QUESTIONS);
    });
  });
};
