import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import { Color, colors } from 'ui/theme/colors';
import { Container } from './styles';

export interface LoadingProps extends ActivityIndicatorProps {
  color?: Color;
  flex1?: boolean;
}

const Loading = ({
  color = 'primary',
  size = 'large',
  flex1 = true,
  style,
  ...props
}: LoadingProps) => {
  return (
    <Container style={style} flex1={flex1}>
      <ActivityIndicator color={colors[color]} size={size} {...props} />
    </Container>
  );
};

export default Loading;
