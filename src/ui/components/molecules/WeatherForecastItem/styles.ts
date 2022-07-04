import styled from 'styled-components/native';
import Typography from 'ui/components/atoms/Typography';
import { Spacing } from 'ui/theme';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: ${Spacing.SCALE_8}px;
`;

export const Temp = styled(Typography).attrs({
  variant: 'h5',
  color: 'gray',
  align: 'left',
})``;

export const Day = styled(Typography).attrs({
  color: 'gray',
})`
  flex: 1;
`;

export const Empty = styled(Typography).attrs({
  color: 'gray',
  children: 'Não foi possível carregar as previsões.',
  align: 'center',
})`
  flex: 1;
`;

export const TempContainer = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
`;
