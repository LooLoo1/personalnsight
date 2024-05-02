import { useDispatch, useSelector } from "hooks/useRedux";
import { useEffect } from "react";
import { setInProgressData } from "store/reducers/questionnaireReducer";
import { fetchQuestionnaireSchema } from "store/reducers/thunks";

export const useInitialize = () => {
  const dispatch = useDispatch();
  const inProcess = useSelector(({ questionnaire }) => questionnaire.inProcess);

  useEffect(() => {
    const storedQuestionnaire = localStorage.getItem("questionnaire");

    if (!inProcess && !storedQuestionnaire) {
      dispatch(fetchQuestionnaireSchema());
    }

    if (!inProcess && storedQuestionnaire) {
      dispatch(setInProgressData(JSON.parse(storedQuestionnaire)));
    }
  }, [dispatch, inProcess]);
};
