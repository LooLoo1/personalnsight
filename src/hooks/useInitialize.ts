import { useDispatch, useSelector } from "hooks";
import { useEffect } from "react";
import { fetchQuestionnaireSchema } from "store";

export const useInitialize = () => {
  const dispatch = useDispatch();
  const inProcess = useSelector(({ questionnaire }) => questionnaire.inProcess);

  useEffect(() => {
    if (!inProcess) {
      dispatch(fetchQuestionnaireSchema());
    }
  }, [dispatch, inProcess]);
};
