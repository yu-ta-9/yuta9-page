import { format } from 'date-fns';

export const formatYYMMDD = (date: Date): string => {
  return format(date, 'yy/MM/dd');
};
