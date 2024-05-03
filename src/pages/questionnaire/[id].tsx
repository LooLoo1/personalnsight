import { getQuestionnaireSchema } from "api";
import { Button, Description, Header, Title } from "components";
import { useDispatch, useSelector } from "hooks";
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import Link from "next/link";
import { endSurvey, nextQuestion, setAnswer } from "store";
import { Choice, QuestionsSchema } from "types";

const QuestionPage = ({
  question,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { inProcess } = useSelector(({ questionnaire }) => questionnaire);
  const dispatch = useDispatch();

  const { type } = question;
  const nextQuestionHandler = (nextQuestionId: number, choice?: Choice) => {
    dispatch(nextQuestion(nextQuestionId));
    if (choice) dispatch(setAnswer(choice));
  };

  if (type === "alert") {
    const { defaultNext, structure } = question;

    return (
      <div className="w-full h-screen bg-gradient-purple">
        <Header className="invert" />

        <section
          className={`flex max-w-96 w-full my-5 flex-col lg:p-2 p-5 mx-auto gap-5`}
        >
          {structure.map((element) => {
            if (element.type === "Title") {
              return (
                <Title state="alert" key={element.text}>
                  {element.text}
                </Title>
              );
            }
            if (element.type === "Description") {
              return (
                <Description state="alert" key={element.text}>
                  {element.text}
                </Description>
              );
            }
            if (element.type === "Button") {
              const { text, nextQuestionId, link } = element;

              return (
                <Link key={text} href={link ?? `/questionnaire/${defaultNext}`}>
                  <Button
                    state="alert"
                    onClick={() =>
                      nextQuestionId || defaultNext
                        ? nextQuestionHandler(
                            Number(nextQuestionId || defaultNext),
                          )
                        : dispatch(endSurvey())
                    }
                    disabled={!inProcess}
                  >
                    {text}
                  </Button>
                </Link>
              );
            }
          })}

          {!inProcess && (
            <Link href={`/`}>
              <Button>Back to main!</Button>
            </Link>
          )}
        </section>
      </div>
    );
  }

  if (type === "question") {
    const { title, description, defaultNext, choices, responseKey } = question;

    return (
      <div className="w-full min-h-inherit">
        <Header />
        <section
          className={`flex max-w-96 w-full h-full my-5 flex-col lg:p-2 p-5 mx-auto gap-8 last:pb-16`}
        >
          <Title>{title}</Title>

          {description && <Description>{description}</Description>}

          {!inProcess && (
            <Link href={`/`}>
              <Button>Back to main!</Button>
            </Link>
          )}

          <div className="flex flex-col gap-5">
            {choices.map(({ text, nextQuestionId, value, template }) => (
              <Link key={text} href={`/questionnaire/${nextQuestionId}`}>
                <Button
                  onClick={() =>
                    nextQuestionHandler(nextQuestionId || defaultNext, {
                      text,
                      nextQuestionId,
                      value,
                      template,
                      responseKey,
                    })
                  }
                  disabled={!inProcess}
                >
                  {text}
                </Button>
              </Link>
            ))}
          </div>
        </section>
      </div>
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
