import { createAsyncThunk } from "@reduxjs/toolkit";
import { getQuestionnaireSchema } from "api";

export const fetchQuestionnaireSchema = createAsyncThunk(
  "questionnaire/getQuestionnaireSchema",
  async () => {
    try {
      const response = await getQuestionnaireSchema();
      return response;
    } catch (error) {
      throw new Error("Failed to fetch questionnaire schema");
    }
  },
);
