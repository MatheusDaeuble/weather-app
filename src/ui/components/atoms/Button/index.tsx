import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Color, colors } from 'ui/theme/colors';

import { Container, Label } from './styles';

export interface ButtonProps {
  label: string;
  variant?: 'filled';
  color?: Color;
  onPress?: () => void;
  labelColor?: Color;
  disabled?: boolean;
  loading?: boolean;
}

const Button = ({
  label,
  color = 'primary',
  labelColor = 'white',
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
        <Label color={loading || disabled ? 'white' : labelColor}>
          {label}
        </Label>
      )}
    </Container>
  );
};

export default Button;
