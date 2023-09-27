import dayjs from 'dayjs';
export const formatDateTime = (date: Date) => {
  return dayjs(date).format('MMM DD,YYYY');
};
