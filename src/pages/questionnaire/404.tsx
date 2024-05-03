export async function getStaticProps() {
  return {
    redirect: {
      permanent: false,
      destination: "/",
    },
  };
}

const QuestionnaireNotFoundPage = () => {
  return <></>;
};

export default QuestionnaireNotFoundPage;
