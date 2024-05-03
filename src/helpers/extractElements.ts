export const extractElements = (str: string): string[] => {
  const regex = /{([^}]+)}/g;
  const matches = str.match(regex);
  if (matches) {
    return matches.map((match) => match.slice(1, -1));
  } else {
    return [];
  }
};
