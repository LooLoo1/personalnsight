import { isWindow } from 'helpers';
import { useCallback } from 'react';
import { clearAnswers, endSurvey, nextQuestion, postQuestionnaireAnswers, setAnswer } from 'store';
import { Choice } from 'types';
import { useDispatch, useSelector } from './useRedux';

export type NextQuestionHandler = (
  nextQuestionId: number | undefined,
  defaultNext: number | undefined,
  choice?: Choice,
) => void;

export const useQuestionsNavigation = () => {
  const answers = useSelector(({ questionnaire }) => questionnaire.answers);
  const store = useSelector(({ questionnaire }) => questionnaire);
  const dispatch = useDispatch();

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
      localStorage.removeItem('questionnaire');
    },
    [dispatch, answers],
  );

  const nextStepHandler = useCallback(
    async (nextQuestionId: number | undefined, defaultNext: number | undefined, choice?: Choice) => {
      if (choice) {
        dispatch(setAnswer(choice));
        if (isWindow()) {
          localStorage.setItem('questionnaire', JSON.stringify({ ...store, answers: [...store.answers, choice] }));
        }
      }

      if (nextQuestionId !== undefined || defaultNext !== undefined) {
        const chosenNextQuestion = nextQuestionId !== undefined ? nextQuestionId : defaultNext;
        nextQuestionHandler(chosenNextQuestion);
      } else {
        handleSurveyCompletion(choice);
      }
    },
    [handleSurveyCompletion, nextQuestionHandler, dispatch, store],
  );

  return {
    nextStepHandler,
  };
};
