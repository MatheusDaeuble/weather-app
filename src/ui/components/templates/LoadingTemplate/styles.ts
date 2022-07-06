import styled from 'styled-components/native';
import { Spacing } from 'ui/theme';
import { colors } from 'ui/theme/colors';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: ${colors.primary};
  padding: ${Spacing.SCALE_28}px;
`;
