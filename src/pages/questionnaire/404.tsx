import { useRouter } from "next/router";

const QuestionnaireNotFoundPage = () => {
  const router = useRouter();
  router.push("/");
  return <></>;
};

export default QuestionnaireNotFoundPage;
