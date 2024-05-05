import { Button, Description, Title } from 'components';
import { useDispatch, useSelector } from 'hooks';
import { Layout } from 'layouts';
import { useRouter } from 'next/router';

import { startSurvey } from 'store';

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();

  const { schema, error, inProcess, questionNow, sucsessQuestionnaire, isSurvey } = useSelector(
    ({ questionnaire }) => questionnaire,
  );

  if (inProcess && !sucsessQuestionnaire) {
    router.replace(`/questionnaire/${questionNow}`);
  }

  const startTestHandler = () => {
    dispatch(startSurvey());
    router.push(`/questionnaire/${questionNow || schema![0].id}`);
  };

  return (
    <Layout>
      <section className="flex max-w-96 w-full h-full my-5 flex-col lg:p-2 p-5 mx-auto gap-8 group alert">
        <Title>Discover Your Relationship Astrology</Title>

        <Description>
          Take our survey to uncover personalized insights into your relationships based on astrology. We&apos;ll guide
          you through a series of questions to tailor-make your astrological profile. Understanding your astrological
          blueprint can revolutionize your approach to relationships. Let&apos;s explore together!
        </Description>

        {schema && <Button onClick={startTestHandler}>Start Now</Button>}
        {!schema && (
          <Button disabled className="animate-pulse">
            Loading...
          </Button>
        )}
        {error && <Button disabled>Error: {error}</Button>}

        {isSurvey === 'success' && (
          <Description className="text-center ">You passed the test successfully. Thank you for your time!</Description>
        )}

        {isSurvey === 'error' && error && <Description className="text-center color-red-500">{error}</Description>}
        {isSurvey === 'sending' && <Description className="text-center">Sending...</Description>}
      </section>
    </Layout>
  );
}
