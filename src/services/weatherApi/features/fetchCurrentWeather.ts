import weatherApi from '..';
import Coordinates from '../types/Coordinates';
import Weather from '../types/Weather';
import { parseToWeather } from '../util/parses';

export const fetchCurrentWeather = async ({
  latitude,
  longitude,
}: Coordinates): Promise<Weather> => {
  const { data } = await weatherApi.get('/weather', {
    params: {
      lat: latitude,
      lon: longitude,
    },
  });

  const dataParsed = parseToWeather(data);

  return dataParsed;
};
