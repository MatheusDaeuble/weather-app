import styled from 'styled-components/native';
import Typography from 'ui/components/atoms/Typography';
import { Spacing } from 'ui/theme';
import { colors } from 'ui/theme/colors';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: ${colors.white};
  padding: ${Spacing.SCALE_28}px;
`;

export const Title = styled(Typography).attrs({
  variant: 'h2',
  color: 'primary',
  align: 'center',
})`
  margin-top: ${Spacing.SCALE_24}px;
  margin-bottom: ${Spacing.SCALE_20}px;
`;

export const Description = styled(Typography).attrs({
  variant: 'body1',
  color: 'gray',
  align: 'center',
})``;
