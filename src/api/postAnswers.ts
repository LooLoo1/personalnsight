import { Choice } from "types";

export const postAnswers = async (data: Choice[]) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: "success",
      });
    }, 1000);
  });
};
