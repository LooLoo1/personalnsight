import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Choice, QuestionsSchema } from "types";
import { fetchQuestionnaireSchema } from "./thunks";

type InitialState = {
  inProcess: boolean;
  questionNow: number | string | undefined;
  loading: boolean;
  error: string | undefined;
  schema: QuestionsSchema[];
  answers: Choice[];
};

const initialState: InitialState = {
  inProcess: false,
  questionNow: undefined,
  loading: false,
  error: undefined,
  schema: [],
  answers: [],
};

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    startSurvey(state) {
      if (state.schema.length > 0) {
        state.inProcess = true;
        state.questionNow = state.schema[0].id;
      }
    },
    endSurvey(state) {
      state.inProcess = false;
      state.questionNow = undefined;
    },

    setInProgressData(state, action: PayloadAction<InitialState>) {
      state = action.payload;
    },
    nextQuestion(state, action: PayloadAction<number>) {
      state.questionNow = action.payload;
    },

    setAnswer(state, action: PayloadAction<Choice>) {
      state.answers.push(action.payload);
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
      });
  },
});

export const {
  startSurvey,
  nextQuestion,
  setInProgressData,
  setAnswer,
  endSurvey,
} = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
