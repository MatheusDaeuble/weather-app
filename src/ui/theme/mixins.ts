import { Dimensions, PixelRatio } from 'react-native';

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window');
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 700;

export const scaleSize = (size: number) =>
  Number(((WINDOW_WIDTH / guidelineBaseWidth) * size).toFixed(0));

export const scaleHeight = (size: number) =>
  Number(((WINDOW_HEIGHT / guidelineBaseHeight) * size).toFixed(0));

export const scaleFont = (size: number) =>
  Number((size * PixelRatio.getFontScale()).toFixed(0));
