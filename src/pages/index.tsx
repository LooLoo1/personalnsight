import { Button, Description, Title } from "components";
import { useDispatch, useSelector } from "hooks";
import { Layout } from "layouts";
import { useRouter } from "next/router";
import { startSurvey } from "store";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();

  const { schema, inProcess, questionNow } = useSelector(
    ({ questionnaire }) => questionnaire,
  );

  if (inProcess) {
    router.replace(`/questionnaire/${questionNow}`);
  }

  const startTestHandler = () => {
    dispatch(startSurvey());
    router.push(`/questionnaire/${questionNow || schema[0].id}`);
  };

  return (
    <Layout>
      <section className="flex max-w-96 w-full h-full my-5 flex-col lg:p-2 p-5 mx-auto gap-8 group alert">
        <Title>Discover Your Relationship Astrology</Title>

        <Description>
          Take our survey to uncover personalized insights into your
          relationships based on astrology. We&apos;ll guide you through a
          series of questions to tailor-make your astrological profile.
          Understanding your astrological blueprint can revolutionize your
          approach to relationships. Let&apos;s explore together!
        </Description>

        <Button onClick={startTestHandler}>Start Now</Button>
      </section>
    </Layout>
  );
}
