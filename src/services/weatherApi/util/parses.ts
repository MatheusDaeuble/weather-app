import { IconName } from 'ui/components/atoms/Icon/types';
import { IllustrationName } from 'ui/components/atoms/Illustration/types';
import Weather from '../types/Weather';
import WeatherWeekForecast from '../types/WeatherWeekForecast';

export const parseToWeather = (data): Weather => {
  return {
    city: data.name,
    country: data.sys.country,
    timestamp: data.dt * 1000 + data.timezone * 1000,
    feelsLike: data.main.feelsLike,
    temp: data.main.temp,
    tempMax: data.main.tempMax,
    tempMin: data.main.tempMin,
    status: data.weather[0].description,
    ...getIllustrationAndIcon(data.weather[0].icon),
  };
};

export const parseToWeekForecast = ({
  daily,
  timezoneOffset,
}): WeatherWeekForecast[] =>
  daily.map(({ temp, weather, dt }) => ({
    timestamp: dt * 1000 + timezoneOffset * 1000,
    min: temp.min,
    max: temp.max,
    ...getIllustrationAndIcon(weather[0].icon),
  }));

const getIllustrationAndIcon = (
  iconName: string
): { illustration: IllustrationName; icon: IconName } => {
  const iconMap: {
    [key in string]: { illustration: IllustrationName; icon: IconName };
  } = {
    '01d': { illustration: 'sun', icon: 'sunny-outline' },
    '02d': { illustration: 'cloud-sun', icon: 'partly-sunny-outline' },
    '03d': { illustration: 'cloud', icon: 'cloud-outline' },
    '04d': { illustration: 'clouds', icon: 'cloudy' },
    '09d': { illustration: 'rain', icon: 'rainy-outline' },
    '10d': { illustration: 'rain-sun', icon: 'rainy-outline' },
    '11d': { illustration: 'storm', icon: 'thunderstorm-outline' },
    '13d': { illustration: 'snow', icon: 'snow-outline' },
    '50d': { illustration: 'mist', icon: 'wind' },
    '01n': { illustration: 'moon', icon: 'moon-outline' },
    '02n': { illustration: 'cloud-moon', icon: 'cloudy-night-outline' },
    '03n': { illustration: 'cloud', icon: 'cloud-outline' },
    '04n': { illustration: 'clouds', icon: 'cloudy' },
    '09n': { illustration: 'rain', icon: 'rainy-outline' },
    '10n': { illustration: 'rain-moon', icon: 'rainy-outline' },
    '11n': { illustration: 'storm', icon: 'thunderstorm-outline' },
    '13n': { illustration: 'snow', icon: 'snow-outline' },
    '50n': { illustration: 'mist', icon: 'wind' },
  };

  return iconMap[iconName];
};
