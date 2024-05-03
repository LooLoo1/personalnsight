import { useDispatch, useSelector } from "hooks";
import { useEffect } from "react";
import { fetchQuestionnaireSchema } from "store";

export const useInitialize = () => {
  const dispatch = useDispatch();
  const inProcess = useSelector(({ questionnaire }) => questionnaire.inProcess);

  // const route = useRouter();
  // const { isWindow } = useIsWindow();

  useEffect(() => {
    // const storedQuestionnaire = localStorage.getItem("questionnaire");

    if (!inProcess) {
      // (!inProcess && !storedQuestionnaire)
      dispatch(fetchQuestionnaireSchema());
    }

    // if (!inProcess && storedQuestionnaire && isWindow) {
    //   const state: InitialState = JSON.parse(storedQuestionnaire);
    //   if (state) {
    //     dispatch(setInProgressData(state));
    //     dispatch(nextQuestion(Number(state.questionNow)));
    //   }
    // }
  }, [dispatch, inProcess]);
};
