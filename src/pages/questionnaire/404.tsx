import { useIsWindow } from "hooks";
import { useRouter } from "next/router";

const QuestionnaireNotFoundPage = () => {
  const router = useRouter();

  useIsWindow(() => {
    setTimeout(() => {
      router.push("/");
    }, 0);
  });
  return <></>;
};

export default QuestionnaireNotFoundPage;
