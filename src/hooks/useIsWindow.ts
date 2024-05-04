import { isWindow } from "helpers";

export const useIsWindow = (callback?: () => void): { isWindow: boolean } => {
  const windowState = isWindow();
  if (windowState && callback) callback();
  return { isWindow: windowState };
};
