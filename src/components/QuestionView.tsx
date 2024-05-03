import { Button, Description, Header, Title } from "components";
import { replaceTitle } from "helpers";
import { useSelector } from "hooks";
import Head from "next/head";
import Link from "next/link";
import { Choice, Question } from "types";

export const QuestionView = ({
  question,
  inProcess,
  nextQuestionHandler,
}: {
  inProcess: boolean;
  question: Question;
  nextQuestionHandler: (nextQuestionId: number, choice?: Choice) => void;
}) => {
  const { id, title, description, defaultNext, choices, responseKey } =
    question;

  const answers = useSelector(({ questionnaire }) => questionnaire.answers);
  const addressing = replaceTitle(title, answers);

  return (
    <>
      <Head>
        <title>Question: {addressing}</title>
      </Head>
      <div className="w-full h-full">
        <Header />
        <section
          className={`flex max-w-96 w-full h-full my-5 flex-col lg:p-2 p-5 mx-auto gap-8 last:pb-16`}
        >
          <Title>{addressing}</Title>

          {description && <Description>{description}</Description>}

          <div className="flex flex-col gap-5">
            {choices.map(({ text, nextQuestionId, value, template }) => (
              <Link key={text} href={`/questionnaire/${nextQuestionId}`}>
                <Button
                  onClick={() => {
                    nextQuestionHandler(nextQuestionId || defaultNext, {
                      id,
                      text,
                      nextQuestionId,
                      value,
                      template,
                      responseKey,
                    });
                  }}
                  disabled={!inProcess}
                >
                  {text}
                </Button>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
