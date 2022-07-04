import styled from 'styled-components/native';
import { ButtonProps } from '.';
import Typography from '../Typography';
import { Spacing } from 'ui/theme';
import { colors } from 'ui/theme/colors';

export const BUTTON_HEIGHT = 54;

type ContainerProps = Omit<ButtonProps, 'label'>;

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.4,
})<ContainerProps>`
  width: 100%;
  padding: ${Spacing.SCALE_12}px;
  min-height: ${BUTTON_HEIGHT}px;
  background-color: ${({ color, disabled }) =>
    colors[disabled ? 'gray-light' : color]};
  justify-content: center;
  align-items: center;
  border-radius: ${Spacing.SCALE_8}px;
`;

export const Label = styled(Typography).attrs({
  variant: 'h3',
  align: 'center',
})``;
