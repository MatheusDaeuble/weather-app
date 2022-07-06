import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Color, colors } from 'ui/theme/colors';
import { Container, Label } from './styles';

export interface ButtonProps {
  label: string;
  color?: Color;
  onPress?: () => void;
  labelColor?: Color;
  disabled?: boolean;
  loading?: boolean;
}

const Button = ({
  label,
  color = 'primary',
  disabled = false,
  loading = false,
  onPress = () => {},
  ...props
}: ButtonProps) => {
  return (
    <Container
      onPress={onPress}
      disabled={disabled || loading}
      color={color}
      {...props}
    >
      {loading ? (
        <ActivityIndicator size='small' color={colors.white} />
      ) : (
        <Label color='white'>{label}</Label>
      )}
    </Container>
  );
};

export default Button;
