export const DOMAIN =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000/api/tiangong/v1'
    : 'http://8.130.177.24:4000';
