import { getQuestionnaireSchema } from "api";
import { AlertView, QuestionView } from "components";
import { useDispatch, useIsWindow, useSelector } from "hooks";
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import { useRouter } from "next/router";
import { nextQuestion, setAnswer } from "store";
import { Choice, QuestionsSchema } from "types";

const QuestionPage = ({
  question,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { inProcess, questionNow } = useSelector(
    ({ questionnaire }) => questionnaire,
  );
  const dispatch = useDispatch();
  const router = useRouter();
  const store = useSelector(({ questionnaire }) => questionnaire);

  const { id, type } = question;

  const { isWindow } = useIsWindow(() => {
    if (inProcess && id !== questionNow) {
      router.push(`/questionnaire/${questionNow}`);
    }
    if (!inProcess) {
      router.push(`/`);
    }
  });

  const nextQuestionHandler = (nextQuestionId: number, choice?: Choice) => {
    dispatch(nextQuestion(nextQuestionId));
    if (choice) dispatch(setAnswer(choice));
    if (isWindow) {
      localStorage.setItem(
        "questionnaire",
        JSON.stringify({ ...store, answers: [...store.answers, choice] }),
      );
    }
  };

  if (type === "question") {
    return (
      <QuestionView
        question={question}
        inProcess={inProcess}
        nextQuestionHandler={nextQuestionHandler}
      />
    );
  }

  if (type === "alert") {
    return (
      <AlertView
        question={question}
        inProcess={inProcess}
        nextQuestionHandler={nextQuestionHandler}
      />
    );
  }

  throw new Error("Not existing question type");
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
