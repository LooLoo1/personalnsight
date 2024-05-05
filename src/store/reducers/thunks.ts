import { createAsyncThunk } from '@reduxjs/toolkit';
import { getQuestionnaireSchema, postQuestionnaireSchema } from 'api';

export const fetchQuestionnaireSchema = createAsyncThunk(
  'questionnaire/getQuestionnaireSchema',
  getQuestionnaireSchema,
);

export const postQuestionnaireAnswers = createAsyncThunk(
  'questionnaire/postQuestionnaireAnswers',
  postQuestionnaireSchema,
);
