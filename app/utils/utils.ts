import { getIdFromURLRegex } from '.';

export const getIdFromURL = (url: string) => {
  return parseInt(url.match(getIdFromURLRegex)[0].replaceAll('/', ''), 10);
};
