import { QuestionsSchema } from "types";

export const getQuestionnaireSchema = async (): Promise<QuestionsSchema[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_ORIGIN}/api/questionSchema`,
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch questionnaire schema");
  }
};
