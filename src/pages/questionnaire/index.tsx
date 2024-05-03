import { Header, Title } from "components";
import { useIsWindow } from "hooks";
import { useRouter } from "next/router";

const QuestionnairePage = () => {
  const router = useRouter();

  useIsWindow(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  });

  return (
    <>
      <Header />
      <Title className="text-center pt-10">Nice try :D (404)</Title>
    </>
  );
};

export default QuestionnairePage;
