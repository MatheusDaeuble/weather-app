import { TextProps, TextStyle } from 'react-native';
import { Color } from 'ui/theme/colors';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'body1'
  | 'body2';

export type TypographyProps = {
  variant?: TypographyVariant;
  color?: Color;
  align?: TextStyle['textAlign'];
  children: React.ReactNode;
  paragraph?: boolean;
  onPress?: () => void;
} & TextProps;
