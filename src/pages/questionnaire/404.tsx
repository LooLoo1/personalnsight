import { useRouter } from 'next/router'
import { useIsWindow } from 'hooks'

const QuestionnaireNotFoundPage = () => {
  const router = useRouter();

  useIsWindow(() => {
    setTimeout(() => {
      router.push('/');
    }, 0);
  });
  return <></>;
};

export default QuestionnaireNotFoundPage;
