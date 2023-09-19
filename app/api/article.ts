import { DOMAIN } from './const';

export const fetchArticles = async () => {
  const res = await fetch(`${DOMAIN}/article`);
  return res.json();
};
