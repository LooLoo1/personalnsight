import { useRouter } from "next/router";
import { useEffect } from "react";

const QuestionnairePage = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  }, [router]);

  return <>Nice try :D</>;
};

export default QuestionnairePage;
