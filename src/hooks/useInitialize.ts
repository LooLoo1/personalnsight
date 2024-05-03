import { useDispatch, useSelector } from "hooks";
import { useEffect } from "react";
import { fetchQuestionnaireSchema, setInProgressData } from "store";

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
