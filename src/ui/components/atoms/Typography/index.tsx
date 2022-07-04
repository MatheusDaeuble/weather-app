import React from 'react';
import { Text } from './styles';
import { TypographyProps } from './types';

const Typography = ({
  variant = 'body1',
  color = 'gray-dark',
  align = 'left',
  paragraph = false,
  children,
  ...props
}: TypographyProps) => {
  if (children === '') return null;

  return (
    <Text
      variant={variant}
      color={color}
      align={align}
      paragraph={paragraph}
      {...props}
    >
      {children}
    </Text>
  );
};

export default Typography;
