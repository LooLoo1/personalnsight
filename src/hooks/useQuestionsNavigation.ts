import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { clearAnswers, endSurvey, nextQuestion, postQuestionnaireAnswers, setAnswer, startSurvey } from 'store';
import { Choice } from 'types';
import { useDispatch, useSelector } from './useRedux';

export type NextQuestionHandler = (
  nextQuestionId: number | undefined,
  defaultNext: number | undefined,
  choice?: Choice,
) => void;

export const useQuestionsNavigation = () => {
  const store = useSelector(({ questionnaire }) => questionnaire);
  const dispatch = useDispatch();
  const router = useRouter();

  const { schema, questionNow, answers } = store;

  const nextQuestionHandler = useCallback(
    (nextQuestionId: number | undefined) => {
      dispatch(nextQuestion(nextQuestionId));
    },
    [dispatch],
  );

  const handleSurveyCompletion = useCallback(
    async (choice: Choice | undefined) => {
      const answerList = choice ? [...answers, choice] : answers;
      await dispatch(postQuestionnaireAnswers(answerList));
      dispatch(endSurvey());
      dispatch(clearAnswers());
    },
    [dispatch, answers],
  );

  const nextStepHandler = useCallback(
    async (nextQuestionId: number | undefined, defaultNext: number | undefined, choice?: Choice) => {
      if (nextQuestionId !== undefined || defaultNext !== undefined) {
        const chosenNextQuestion = nextQuestionId !== undefined ? nextQuestionId : defaultNext;
        nextQuestionHandler(chosenNextQuestion);
      } else {
        handleSurveyCompletion(choice);
      }
      if (choice) {
        dispatch(setAnswer(choice));
      }
    },
    [handleSurveyCompletion, nextQuestionHandler, dispatch],
  );

  const startTestHandler = () => {
    dispatch(startSurvey());
    router.push(`/questionnaire/${questionNow || schema![0].id}`);
  };

  return {
    nextStepHandler,
    startTestHandler,
  };
};
