import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { composeQuestionnairePath, isWindow } from 'helpers'
import { useDispatch, useSelector } from 'hooks'
import { fetchQuestionnaireSchema, setInProgressData } from 'store'

export const useInitialize = () => {
  const dispatch = useDispatch();
  const { inProcess, questionNow, schema } = useSelector(({ questionnaire }) => questionnaire);
  const router = useRouter();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!inProcess && !initialized) {
      dispatch(fetchQuestionnaireSchema());
      setInitialized(true);
    }
  }, [dispatch, inProcess, initialized]);

  useEffect(() => {
    if (isWindow() && !inProcess && initialized) {
      const data = localStorage.getItem('questionnaire');
      if (data) {
        const parseData = JSON.parse(data);
        if (questionNow !== parseData.questionNow) {
          dispatch(setInProgressData(parseData));
          const path = composeQuestionnairePath(schema!, questionNow, parseData.questionNow);
          path && router.replace(`/questionnaire/${path}`);
        }
      }
    }
  }, [dispatch, inProcess, initialized, questionNow, router, schema]);
};
