import styled from 'styled-components/native';
import { Color, colors } from 'ui/theme/colors';

export const Container = styled.SafeAreaView<{ color: Color; isFlex: boolean }>`
  flex: ${({ isFlex }) => Number(isFlex)};
  background: ${({ color }) => colors[color]};
`;
