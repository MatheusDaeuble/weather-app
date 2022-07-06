import { SvgProps } from 'react-native-svg';

export type IllustrationName =
  | 'cloud'
  | 'error'
  | 'cloud-moon'
  | 'clouds'
  | 'cloud-sun'
  | 'location'
  | 'mist'
  | 'moon'
  | 'rain'
  | 'rain-moon'
  | 'rain-sun'
  | 'snow'
  | 'storm'
  | 'sun';

export interface IllustrationProps extends SvgProps {
  name: IllustrationName;
}
