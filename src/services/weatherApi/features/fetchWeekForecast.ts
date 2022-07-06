import weatherApi from '..';
import Coordinates from '../types/Coordinates';
import WeatherWeekForecast from '../types/WeatherWeekForecast';
import { parseToWeekForecast } from '../util/parses';

export const fetchWeekForecast = async ({
  latitude,
  longitude,
}: Coordinates): Promise<WeatherWeekForecast[]> => {
  const { data } = await weatherApi.get('/onecall', {
    params: {
      lat: latitude,
      lon: longitude,
      exclude: ['minutely', 'hourly'],
    },
  });

  const parsedData = parseToWeekForecast(data);

  return parsedData;
};
