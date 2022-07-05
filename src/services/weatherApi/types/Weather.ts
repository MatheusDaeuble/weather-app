import { IconName } from 'ui/components/atoms/Icon/types';
import { IllustrationName } from 'ui/components/atoms/Illustration/types';

export default interface Weather {
  city: string;
  country: string;
  timestamp: number;
  feelsLike: number;
  temp: number;
  tempMax: number;
  tempMin: number;
  status: string;
  illustration: IllustrationName;
  icon: IconName;
}
