import { getQuestionnaireSchema } from 'api';
import { AlertView, QuestionView } from 'components';
import { useIsWindow, useQuestionsNavigation, useSelector } from 'hooks';
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { questionnaireSelector } from 'store';
import { QuestionsSchema } from 'types';

const QuestionPage = ({ question }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { inProcess, questionNow, schema } = useSelector(({ questionnaire }) => questionnaire);
  const router = useRouter();
  const { nextStepHandler } = useQuestionsNavigation();

  const { id, type } = question;

  useIsWindow(() => {
    if (inProcess && id !== questionNow) {
      router.push(`/questionnaire/${questionNow}`);
    }
    if (!inProcess && schema) {
      router.push(`/`);
    }
  });

  if (type === 'question') {
    return <QuestionView question={question} inProcess={inProcess} nextStepHandler={nextStepHandler} />;
  }

  if (type === 'alert') {
    return <AlertView question={question} inProcess={inProcess} nextStepHandler={nextStepHandler} />;
  }

  throw new Error('Not existing question type');
};

export const getStaticPaths = (async () => {
  const schema = await getQuestionnaireSchema();
  const paths = schema.map(({ id }) => {
    return {
      params: {
        id: id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const res = await getQuestionnaireSchema();
  const question = res.filter(({ id }) => id === Number(context.params?.id))[0];
  return {
    props: { question },
  };
}) satisfies GetStaticProps<{ question: QuestionsSchema }>;

export default QuestionPage;
