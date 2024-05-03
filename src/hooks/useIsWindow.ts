export const useIsWindow = (callback?: () => void): { isWindow: boolean } => {
  const isWindow = typeof window !== "undefined";
  if (isWindow && callback) callback();
  return { isWindow };
};
