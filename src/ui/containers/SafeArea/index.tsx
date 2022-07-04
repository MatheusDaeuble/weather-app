import React from 'react';
import { Color } from 'ui/theme/colors';
import { Container } from './styles';

interface SafeAreaProps {
  color?: Color;
  isFlex?: boolean;
  children?: React.ReactNode | React.ReactNode[];
}

const SafeArea = ({
  color = 'white',
  isFlex = true,
  children,
}: SafeAreaProps) => (
  <Container color={color} isFlex={isFlex}>
    {children}
  </Container>
);

export default SafeArea;
