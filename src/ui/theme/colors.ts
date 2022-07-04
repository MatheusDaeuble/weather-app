export enum Colors {
  // PRIMARY
  PRIMARY = '#2E89DF',

  // SECONDARY
  SECONDARY = '#809FFF',

  WHITE = '#FFFFFF',
  BLACK = '#000000',

  // FEEDBACK COLORS
  SUCCESS = '#0E934C',
  WARNING = '#FF8B2C',
  DANGER = '#EB5757',

  // GRAY SCALE
  GRAY_DARK = '#4B4F58',
  GRAY = '#949494',
  GRAY_LIGHT = '#CECECE',
}

export type Color =
  | 'primary'
  | 'secondary'
  | 'white'
  | 'black'
  | 'success'
  | 'warning'
  | 'danger'
  | 'gray-dark'
  | 'gray'
  | 'gray-light';

export const colors: { [key in Color]: string } = {
  'primary': Colors.PRIMARY,
  'secondary': Colors.SECONDARY,
  'white': Colors.WHITE,
  'black': Colors.BLACK,
  'success': Colors.SUCCESS,
  'danger': Colors.DANGER,
  'warning': Colors.WARNING,
  'gray-dark': Colors.GRAY_DARK,
  'gray': Colors.GRAY,
  'gray-light': Colors.GRAY_LIGHT,
};

export const defaultTheme = {
  colors,
};
