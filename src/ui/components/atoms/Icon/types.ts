import { Color } from 'ui/theme/colors';
import { ViewStyle } from 'react-native';

export type IconName =
  | 'cloud-outline'
  | 'cloudy-night-outline'
  | 'cloudy'
  | 'sync'
  | 'x-circle-outlined'
  | 'check-circle'
  | 'moon-outline'
  | 'partly-sunny-outline'
  | 'rainy-outline'
  | 'snow-outline'
  | 'sunny-outline'
  | 'thunderstorm-outline'
  | 'wind'
  | 'chevron-down'
  | 'chevron-up';

export type IconColor = Color;

export type IconProps = {
  name: IconName;
  disabled?: boolean;
  color?: IconColor;
  size?: number;
  style?: ViewStyle;
  onPress?: () => void;
};
