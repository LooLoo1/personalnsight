import { isWindow } from 'helpers';
import { useDispatch, useSelector } from 'hooks';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetchQuestionnaireSchema, setInProgressData } from 'store';

export const useInitialize = () => {
  const dispatch = useDispatch();
  const { inProcess, questionNow } = useSelector(({ questionnaire }) => questionnaire);
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
          router.replace(`/questionnaire/${parseData.questionNow}`);
        }
      }
    }
  }, [dispatch, inProcess, initialized, questionNow, router]);
};
