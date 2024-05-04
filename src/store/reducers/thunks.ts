import { createAsyncThunk } from "@reduxjs/toolkit";
import { getQuestionnaireSchema } from "api";

export const fetchQuestionnaireSchema = createAsyncThunk(
  "questionnaire/getQuestionnaireSchema",
  getQuestionnaireSchema,
);
