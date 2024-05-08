import { useCallback } from 'react'
import { useRouter } from 'next/router'
import { isQuestion, toCamelCaseFromUnderscore } from 'helpers'
import { clearAnswers, endSurvey, nextQuestion, postQuestionnaireAnswers, setAnswer, startSurvey } from 'store'
import { Choice } from 'types'

import { useDispatch, useSelector } from './useRedux'

export type NextQuestionHandler = (nextQuestionId?: number, defaultNext?: number, choice?: Choice) => void;

export const useQuestionsNavigation = () => {
  const store = useSelector(({ questionnaire }) => questionnaire);
  const dispatch = useDispatch();
  const router = useRouter();

  const { schema, questionNow, answers } = store;

  const nextQuestionHandler = useCallback(
    (nextQuestionId?: number) => {
      dispatch(nextQuestion(nextQuestionId));
    },
    [dispatch],
  );

  const handleSurveyCompletion = useCallback(
    async (choice?: Choice) => {
      const answerList = choice ? [...answers, choice] : answers;
      await dispatch(postQuestionnaireAnswers(answerList));
      dispatch(endSurvey());
      dispatch(clearAnswers());
    },
    [dispatch, answers],
  );

  const nextStepHandler = useCallback(
    async (nextQuestionId?: number, defaultNext?: number, choice?: Choice) => {
      if (nextQuestionId) {
        nextQuestionHandler(nextQuestionId);
      }
      if (!nextQuestionId && defaultNext) {
        nextQuestionHandler(defaultNext);
      }
      if (choice) {
        if (!nextQuestionId && !defaultNext) {
          handleSurveyCompletion(choice);
        }
        dispatch(setAnswer(choice));
      }
    },

    [handleSurveyCompletion, nextQuestionHandler, dispatch],
  );

  const startTestHandler = () => {
    dispatch(startSurvey());
    if (isQuestion(schema![0])) {
      const path = toCamelCaseFromUnderscore(schema![0].responseKey);
      router.push(`/questionnaire/${path}`);
      return;
    }
    router.push(`/questionnaire/${questionNow || schema![0].id}`);
  };

  return {
    nextStepHandler,
    startTestHandler,
  };
};
