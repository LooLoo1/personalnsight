export const toCamelCaseFromUnderscore = (responseKey: string): string => {
  return responseKey
    .toLowerCase()
    .split('_')
    .map((key: string) => key.charAt(0).toUpperCase() + key.slice(1))
    .join('');
};
