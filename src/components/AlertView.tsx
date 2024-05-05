import { Button, Description, Header, Title } from 'components';
import { NextQuestionHandler } from 'hooks';
import Head from 'next/head';
import Link from 'next/link';
import { Fragment, memo } from 'react';
import { Alert } from 'types';

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

  return (
    <div className="w-full h-screen bg-gradient-purple">
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

            return (
              <Link key={text} href={defaultNext ? `/questionnaire/${defaultNext}` : ''}>
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
