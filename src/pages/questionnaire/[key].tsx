import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import { getQuestionnaireSchema } from 'api'
import { AlertView, QuestionView } from 'components'
import { composeQuestionnairePath, toCamelCaseFromUnderscore } from 'helpers'
import { useIsWindow, useQuestionsNavigation, useSelector } from 'hooks'
import { QuestionsSchema } from 'types'

const QuestionPage = ({ question }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { inProcess, questionNow, schema } = useSelector(({ questionnaire }) => questionnaire);
  const router = useRouter();
  const { nextStepHandler } = useQuestionsNavigation();

  const { id, type } = question;

  useIsWindow(() => {
    if (inProcess && id !== questionNow) {
      const path = composeQuestionnairePath(schema!, questionNow, id);
      router.replace(`/questionnaire/${path}`);
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
  const paths = schema.map(({ id, responseKey }: { id: number; responseKey?: string }) => {
    const params = responseKey ? toCamelCaseFromUnderscore(responseKey) : id.toString();
    return {
      params: {
        key: params,
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
  const filteredQuestions = res.filter(({ id, responseKey }: { id: number; responseKey?: string }) => {
    if (!responseKey) {
      return id.toString() === context.params?.key;
    }
    return toCamelCaseFromUnderscore(responseKey) === context.params?.key;
  });

  const question = filteredQuestions[0];

  return {
    props: { question },
  };
}) satisfies GetStaticProps<{ question: QuestionsSchema }>;

export default QuestionPage;
