import { Button, Description, Header, Title } from "components";
import { useDispatch } from "hooks";
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

  return (
    <div className="w-full h-screen bg-gradient-purple">
      <Header className="invert" />
      <section
        className={`flex max-w-96 w-full my-5 flex-col lg:p-2 p-5 mx-auto gap-5 pb-16`}
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

            const finishHandler = () => {
              if (nextQuestionId || defaultNext) {
                nextQuestionHandler((nextQuestionId || defaultNext) as number);
              } else {
                dispatch(endSurvey());
                dispatch(clearAnswers());
                localStorage.removeItem("questionnaire");
              }
            };

            return (
              <Link key={text} href={link ?? `/questionnaire/${defaultNext}`}>
                <Button
                  state="alert"
                  onClick={finishHandler}
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
