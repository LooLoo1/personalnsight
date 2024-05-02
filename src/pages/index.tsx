import { Layout } from "components/Layout";
import { Typography } from "components/Typography";
import { useDispatch, useSelector } from "hooks/useRedux";
import { useRouter } from "next/router";
import { startSurvey } from "store/reducers/questionnaireReducer";

const { Title, Description, Button } = Typography;

export default function Home() {
  const dispatch = useDispatch();
  const { schema, inProcess, questionNow } = useSelector(
    ({ questionnaire }) => questionnaire,
  );
  const router = useRouter();

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
