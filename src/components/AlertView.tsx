import { Fragment, memo } from 'react'
import Head from "next/head"
import Link from 'next/link'
import { Button, Description, Header, Title } from 'components'
import { composeQuestionnairePath } from 'helpers'
import { NextQuestionHandler, useSelector } from 'hooks'
import { Alert } from 'types'

export const AlertView = memo(function AlertView({
  inProcess,
  question,
  nextStepHandler,
}: {
  inProcess: boolean;
  question: Alert;
  nextStepHandler: NextQuestionHandler;
}) {
  const { defaultNext, structure } = question;
  const { schema } = useSelector(({ questionnaire }) => questionnaire);

  return (
    <div className="w-full h-screen bg-gradient-accent">
      <Header className="invert" />
      <section className={`flex max-w-96 w-full my-5 flex-col lg:p-2 p-5 mx-auto gap-5 pb-16`}>
        {structure.map((element) => {
          if (element.type === 'Title') {
            return (
              <Fragment key={element.text}>
                <Head>
                  <title>Alert: {element.text}</title>
                </Head>
                <Title state="alert" key={element.text}>
                  {element.text}
                </Title>
              </Fragment>
            );
          }
          if (element.type === 'Description') {
            return (
              <Description state="alert" key={element.text}>
                {element.text}
              </Description>
            );
          }
          if (element.type === 'Button') {
            const { text, nextQuestionId } = element;
            const path = composeQuestionnairePath(schema!, defaultNext, defaultNext);

            return (
              <Link key={text} href={defaultNext ? `/questionnaire/${path}` : ''}>
                <Button
                  state="alert"
                  onClick={() => nextStepHandler(nextQuestionId, defaultNext)}
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
});
