import Weather from 'services/weatherApi/types/Weather';
import { formatDate, formatTemperature } from 'util/format';

export const formatWeather = (data: Weather) => {
  const formatted = { description: '', location: '', date: '', temp: '' };

  if (data) {
    const { temp, tempMax, tempMin, city, country, timestamp, feelsLike } =
      data;

    formatted.location = `${city}, ${country}`;
    formatted.date = formatDate(timestamp);
    formatted.temp = formatTemperature(temp);
    formatted.description = `A sensação termina é de ${formatTemperature(
      feelsLike
    )}, a máxima será de ${formatTemperature(
      tempMax
    )} e a mínima é de ${formatTemperature(tempMin)}.`;
  }

  return formatted;
};
