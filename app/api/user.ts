const ORIGIN =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000'
    : 'https://work.bitou.tech';

export const getUserInfoURL = `${ORIGIN}/api/user/info`;
