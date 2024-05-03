import { QUESTIONS } from "@constants";
import { QuestionsSchema } from "types";

export const getQuestionnaireSchema = async (): Promise<QuestionsSchema[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(QUESTIONS);
    });
  });
};
