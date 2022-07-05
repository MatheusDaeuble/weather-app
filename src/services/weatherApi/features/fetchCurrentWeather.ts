import weatherApi from '..';
import Weather from '../types/Weather';
import { parseToWeather } from '../util/parses';

export const fetchCurrentWeather = async (params: {
  lat: number;
  lon: number;
}): Promise<Weather> => {
  const { data } = await weatherApi.get('/weather', { params });

  const dataParsed = parseToWeather(data);

  return dataParsed;
};
