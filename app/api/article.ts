export const fetchArticles = async () => {
  const res = await fetch('http://localhost:4000/api/article');
  return res.json();
};
