import { useRouter } from "next/router";
import { useEffect } from "react";

const QuestionnairePage = () => {
  const router = useRouter();
  const isWindow = typeof window !== "undefined"

  useEffect(() => {
    if (isWindow) {
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  }, [router, isWindow]);

  return <>Nice try :D</>;
};

export default QuestionnairePage;
