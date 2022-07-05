import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'ui/components/atoms/Icon';
import Illustration from 'ui/components/atoms/Illustration';
import Typography from 'ui/components/atoms/Typography';
import { Spacing } from 'ui/theme';
import { colors } from 'ui/theme/colors';
import { WINDOW_WIDTH } from 'util/dimensions';

export const Container = styled.View`
  flex: 1;
  height: 100%;
  background: ${colors.primary};
  justify-content: space-between;
  align-items: center;
  padding-top: ${StatusBar.currentHeight || 0}px;
`;

export const CurrentWeatherContainer = styled.View`
  padding: ${Spacing.SCALE_24}px;
  align-items: center;
`;

export const Location = styled(Typography).attrs({
  variant: 'h3',
  color: 'white',
  align: 'center',
})`
  margin-bottom: ${Spacing.SCALE_4}px;
`;

export const DateTime = styled(Typography).attrs({
  variant: 'h5',
  color: 'white',
  align: 'center',
})``;

export const Temperature = styled(Typography).attrs({
  variant: 'h1',
  color: 'white',
  align: 'center',
})`
  margin-top: ${Spacing.SCALE_8}px;
`;

export const Description = styled(Typography).attrs({
  variant: 'body1',
  color: 'white',
})`
  /* margin: ${Spacing.SCALE_20}px; */
`;

export const Status = styled(Typography).attrs({
  variant: 'body2',
  color: 'white',
  align: 'left',
})`
  margin-bottom: ${Spacing.SCALE_20}px;
  text-transform: capitalize;
`;

export const Content = styled.View`
  width: ${WINDOW_WIDTH - Spacing.SCALE_24}px;
  margin-top: ${Spacing.SCALE_24}px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: ${Spacing.SCALE_16}px;
  padding: ${Spacing.SCALE_20}px;
`;

export const StatusContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const WeekContainer = styled.View`
  flex: 1;
  width: 100%;
  max-height: 420px;
  background-color: ${colors.white};
  border-top-right-radius: ${Spacing.SCALE_16}px;
  border-top-left-radius: ${Spacing.SCALE_16}px;
  padding: ${Spacing.SCALE_20}px;
  padding-bottom: 0px;
`;

export const WeatherIllustrationContainer = styled.View<{
  finalHeight: number;
}>`
  position: absolute;
  right: ${Spacing.SCALE_20}px;
  margin-top: -${({ finalHeight }) => (finalHeight < 100 ? finalHeight / 2 : 50)}px;
  opacity: ${({ finalHeight }) => finalHeight};
`;

export const WeatherIllustration = styled(Illustration).attrs({
  height: 120,
})`
  align-self: flex-end;
  max-height: 100px;
  max-width: 120px;
`;

export const RefreshContainer = styled.View`
  position: absolute;
  right: ${Spacing.SCALE_28}px;
  top: ${Spacing.SCALE_8}px;
  align-items: center;
  justify-content: center;
  height: 26px;
  width: 26px;
`;

export const RefreshIcon = styled(Icon).attrs({
  color: 'white',
})``;

export const Refreshing = styled.ActivityIndicator.attrs({ color: 'white' })``;
