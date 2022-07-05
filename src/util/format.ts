import { months, week } from './date';

export const formatWeekDay = (date: Date | number) =>
  week[new Date(date).getDay()];

// Example: 24°
export const formatTemperature = (value: number) => `${Math.round(value)}°`;

// Example: Seg, 4 de Julho de 2022
export const formatDate = (value: Date | number) => {
  const date = new Date(value);

  const weekDay = formatWeekDay(date).slice(0, 3);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${weekDay}, ${day} de ${month} de ${year}`;
};
