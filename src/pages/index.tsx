import { useRouter } from 'next/router'
import { Button, Description, Title } from 'components'
import { composeQuestionnairePath } from 'helpers'
import { useQuestionsNavigation, useSelector } from 'hooks'
import { Layout } from 'layouts'

export default function Home() {
  const router = useRouter();
  const { startTestHandler } = useQuestionsNavigation();

  const { schema, error, inProcess, questionNow, questionnaireSuccess, isSurvey } = useSelector(
    ({ questionnaire }) => questionnaire,
  );

  if (inProcess && !questionnaireSuccess) {
    const path = composeQuestionnairePath(schema!, questionNow, questionNow);
    path && router.replace(`/questionnaire/${path}`);
  }

  return (
    <Layout>
      <section className="flex max-w-96 w-full my-5 flex-col lg:p-2 p-5 mx-auto gap-8 group alert">
        <Title>Discover Your Relationship Astrology</Title>

        <Description>
          Take our survey to uncover personalized insights into your relationships based on astrology. We&apos;ll guide
          you through a series of questions to tailor-make your astrological profile. Understanding your astrological
          blueprint can revolutionize your approach to relationships. Let&apos;s explore together!
        </Description>

        {schema && <Button onClick={startTestHandler}>Start Now{isSurvey === 'success' && ', again?'}</Button>}
        {!schema && (
          <Button disabled className="animate-pulse">
            Loading...
          </Button>
        )}
        {isSurvey === 'success' && (
          <Description className="text-center">You passed the test successfully. Thank you for your time!</Description>
        )}
        {isSurvey === 'error' || (error && <Description className="text-center color-red-500">{error}</Description>)}
        {isSurvey === 'sending' && <Description className="text-center">Sending...</Description>}
      </section>
    </Layout>
  );
}
