/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { ElementType } from 'react';
import { View } from 'react-native';
import { SvgProps } from 'react-native-svg';

const ResizeHOC = (WrappedComponent: ElementType, aspectRatio: number) => {
  const Wrapper = ({ width, height, ...props }: SvgProps) => {
    return (
      <View style={{ aspectRatio, width, height }}>
        <WrappedComponent {...props} />
      </View>
    );
  };
  return Wrapper;
};

export default ResizeHOC;
