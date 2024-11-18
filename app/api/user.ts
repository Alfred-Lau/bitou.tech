const ORIGIN =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000/api/tiangong/v1"
    : "https://work.bitou.tech/api";

export const getUserInfoURL = async () => {
  return fetch(`${ORIGIN}/user/info`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};
