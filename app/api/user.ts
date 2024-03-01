const ORIGIN =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000"
    : "https://work.bitou.tech";

export const getUserInfoURL = async (params) => {
  return fetch(`${ORIGIN}/api/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    ...params,
  }).then((res) => res.json());
};
