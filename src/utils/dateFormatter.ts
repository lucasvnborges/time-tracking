import { format, getTime, formatDistanceToNow } from 'date-fns';

type DateType = Date | string | number;

export function fDate(date: DateType) {
  return format(new Date(date), 'dd MMMM yyyy');
}

export function fDateTime(date: DateType) {
  return format(new Date(date), 'dd MMM yyyy p');
}

export function fTimestamp(date: DateType) {
  return getTime(new Date(date));
}

export function fDateTimeSuffix(date: DateType) {
  return format(new Date(date), 'dd/MM/yyyy hh:mm p');
}

export function fToNow(date: DateType) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
  });
}
