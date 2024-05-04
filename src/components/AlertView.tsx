import { postQuestionnaireSchema } from "api";
import { Button, Description, Header, Title } from "components";
import { useDispatch, useSelector } from "hooks";
import Head from "next/head";
import Link from "next/link";
import { clearAnswers, endSurvey } from "store";
import { Alert, Choice } from "types";

export const AlertView = ({
  inProcess,
  question,
  nextQuestionHandler,
}: {
  inProcess: boolean;
  question: Alert;
  nextQuestionHandler: (nextQuestionId: number, choice?: Choice) => void;
}) => {
  const { defaultNext, structure } = question;
  const dispatch = useDispatch();
  const answers = useSelector(({ questionnaire }) => questionnaire.answers);

  const handleSurveyCompletion = () => {
    dispatch(endSurvey());
    dispatch(clearAnswers());
    postQuestionnaireSchema(answers);
    localStorage.removeItem("questionnaire");
  };

  const finishHandler = (
    nextQuestionId: number | undefined,
    defaultNext: number | undefined,
  ) => {
    const hasExplicitNextQuestion = nextQuestionId !== undefined;
    const hasDefaultNextQuestion = defaultNext !== undefined;

    if (hasExplicitNextQuestion || hasDefaultNextQuestion) {
      const chosenNextQuestion = hasExplicitNextQuestion
        ? nextQuestionId
        : defaultNext;
      nextQuestionHandler(chosenNextQuestion as number);
    } else {
      handleSurveyCompletion();
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-purple">
      <Header className="invert" />
      <section
        className={`flex max-w-96 w-full my-5 flex-col lg:p-2 p-5 mx-auto gap-5 pb-16`}
      >
        {structure.map((element) => {
          if (element.type === "Title") {
            return (
              <>
                <Head>
                  <title>Alert: {element.text}</title>
                </Head>
                <Title state="alert" key={element.text}>
                  {element.text}
                </Title>
              </>
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
                  onClick={() => finishHandler(nextQuestionId, defaultNext)}
                  disabled={!inProcess}
                >
                  {text}
                </Button>
              </Link>
            );
          }
        })}
      </section>
    </div>
  );
};
