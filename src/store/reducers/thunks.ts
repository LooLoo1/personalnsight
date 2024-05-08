import { getQuestionnaireSchema, postQuestionnaireSchema } from 'api'

import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchQuestionnaireSchema = createAsyncThunk(
  'questionnaire/getQuestionnaireSchema',
  getQuestionnaireSchema,
);

export const postQuestionnaireAnswers = createAsyncThunk(
  'questionnaire/postQuestionnaireAnswers',
  postQuestionnaireSchema,
);
