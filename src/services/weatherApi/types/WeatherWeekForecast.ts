import { IconName } from 'ui/components/atoms/Icon/types';
import { IllustrationName } from 'ui/components/atoms/Illustration/types';

export default interface WeatherWeekForecast {
  timestamp: number;
  min: number;
  max: number;
  icon: IconName;
  illustration: IllustrationName;
}
