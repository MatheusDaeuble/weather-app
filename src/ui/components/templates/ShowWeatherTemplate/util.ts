import { Weather } from 'services/weatherApi/hooks/useWeatherApi';
import { formatDate, formatTemperature } from 'util/format';

export const formatWeather = (data: Weather) => {
  const formatted = { description: '', location: '', date: '', temp: '' };

  if (data) {
    const { temp, tempMax, tempMin, city, country, timestamp } = data;

    formatted.location = `${city}, ${country}`;
    formatted.date = formatDate(timestamp);
    formatted.temp = formatTemperature(temp);
    formatted.description = `Hoje a máximo é de ${formatTemperature(
      tempMax
    )} e a mínima é de ${formatTemperature(tempMin)}.`;
  }

  return formatted;
};
