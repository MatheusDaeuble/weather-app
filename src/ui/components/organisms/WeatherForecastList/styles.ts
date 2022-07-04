import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import Typography from 'ui/components/atoms/Typography';
import { Spacing } from 'ui/theme';

export const WeekList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingVertical: Spacing.SCALE_12,
  },
})`
  padding-top: ${Spacing.SCALE_8}px;
` as unknown as typeof FlatList;

export const Empty = styled(Typography).attrs({
  color: 'gray',
  children: 'Não foi possível carregar as previsões.',
  align: 'center',
})`
  flex: 1;
`;
