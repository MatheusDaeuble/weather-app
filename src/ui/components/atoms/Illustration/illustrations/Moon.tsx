import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import ResizeHOC from '../hoc/ResizeHOC';

const SvgMoon = (props: SvgProps) => {
  return (
    <Svg viewBox='0 0 251 290' fill='none' {...props}>
      <Path
        d='M197.368 256.995c19.356 0 37.587-4.928 53.508-13.628-26.348 28.38-63.976 46.097-105.704 46.097C65.489 289.464.876 224.851.876 145.168.876 65.485 65.489.874 145.172.874c41.728 0 79.356 17.715 105.704 46.093-15.921-8.698-34.152-13.628-53.508-13.628-61.77 0-111.84 50.063-111.84 111.829 0 61.766 50.07 111.827 111.84 111.827'
        fill='#FBDB60'
      />
    </Svg>
  );
};

export default ResizeHOC(SvgMoon, 0.8655172413793103);
