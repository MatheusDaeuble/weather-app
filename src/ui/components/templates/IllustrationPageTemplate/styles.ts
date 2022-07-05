import styled from 'styled-components/native';
import Typography from 'ui/components/atoms/Typography';
import { Spacing } from 'ui/theme';
import { colors } from 'ui/theme/colors';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background: ${colors.white};
  padding: ${Spacing.SCALE_24}px;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Typography).attrs({
  variant: 'h2',
  align: 'center',
})`
  margin-vertical: ${Spacing.SCALE_20}px;
`;

export const Description = styled(Typography).attrs({
  variant: 'body1',
  color: 'gray',
  align: 'center',
})``;
