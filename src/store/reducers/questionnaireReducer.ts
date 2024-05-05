import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Choice, QuestionsSchema } from 'types';
import { fetchQuestionnaireSchema, postQuestionnaireAnswers } from './thunks';

export type InitialState = {
  inProcess: boolean;
  sucsessQuestionnaire: boolean;
  questionNow: number | string | undefined;
  loading: boolean;
  error: string | undefined;
  schema: QuestionsSchema[] | undefined;
  answers: Choice[];
  isSurvey: 'sending' | 'success' | 'error' | undefined;
};

const initialState: InitialState = {
  inProcess: false,
  sucsessQuestionnaire: false,
  questionNow: undefined,
  loading: false,
  error: undefined,
  schema: undefined,
  answers: [],
  isSurvey: undefined,
};

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    startSurvey(state) {
      if (state.schema!.length > 0) {
        state.inProcess = true;
        state.isSurvey = undefined;
        state.questionNow = state.schema![0].id;
      }
    },
    endSurvey(state) {
      state.inProcess = false;
      state.questionNow = undefined;
    },

    setInProgressData(state, action: PayloadAction<InitialState>) {
      state = action.payload;
    },
    nextQuestion(state, action: PayloadAction<number | undefined>) {
      state.questionNow = action.payload;
    },

    setAnswer(state, action: PayloadAction<Choice>) {
      state.answers.push(action.payload);
    },

    backToPreviousQuestion(state) {
      if (state.answers.length > 0) {
        const questionId = state.answers[state.answers.length - 1].id || undefined;
        if (questionId) {
          state.questionNow = questionId;
          state.answers.pop();
        }
        return;
      }
      state.questionNow = undefined;
      state.inProcess = false;
      state.answers = [];
    },

    clearAnswers(state) {
      state = {
        ...state,
        inProcess: false,
        questionNow: undefined,
        loading: false,
        answers: [],
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestionnaireSchema.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchQuestionnaireSchema.fulfilled, (state, action) => {
        state.loading = false;
        state.schema = action.payload;
      })
      .addCase(fetchQuestionnaireSchema.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(postQuestionnaireAnswers.pending, (state) => {
        state.isSurvey = 'sending';
      })
      .addCase(postQuestionnaireAnswers.fulfilled, (state, action) => {
        state.isSurvey = 'success';
        state.sucsessQuestionnaire = true;
        state.answers = [];
      })
      .addCase(postQuestionnaireAnswers.rejected, (state, action) => {
        state.isSurvey = 'error';
        state.error = action.error.message;
      });
  },
});

export const {
  startSurvey,
  nextQuestion,
  setInProgressData,
  setAnswer,
  endSurvey,
  clearAnswers,
  backToPreviousQuestion,
} = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
