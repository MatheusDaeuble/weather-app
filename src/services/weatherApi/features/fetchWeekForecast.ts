import weatherApi from '..';
import WeatherWeekForecast from '../types/WeatherWeekForecast';
import { parseToWeekForecast } from '../util/parses';

export const fetchWeekForecast = async (params: {
  lat: number;
  lon: number;
}): Promise<WeatherWeekForecast[]> => {
  const { data } = await weatherApi.get('/onecall', {
    params: {
      ...params,
      exclude: ['minutely', 'hourly'],
    },
  });

  const parsedData = parseToWeekForecast(data);

  return parsedData;
};
