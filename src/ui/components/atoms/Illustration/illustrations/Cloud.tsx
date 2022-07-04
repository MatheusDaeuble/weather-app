import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import ResizeHOC from '../hoc/ResizeHOC';

const SvgCloud = (props: SvgProps) => {
  return (
    <Svg viewBox='0 0 259 159' fill='none' {...props}>
      <Path
        d='M225.646 92.452c-.125 0-.239.03-.362.03a43.515 43.515 0 003.577-17.292c0-24.102-19.536-43.625-43.634-43.625-8.517 0-16.437 2.468-23.153 6.69C152.989 16.176 131.287.609 105.93.609c-33.53 0-60.71 27.195-60.71 60.724 0 2.528.204 5.01.506 7.464-.17 0-.336-.03-.507-.03-22.48 0-40.705 18.23-40.705 40.709 0 22.48 18.225 40.705 40.705 40.705h180.427c15.944 0 28.868-12.924 28.868-28.868 0-15.942-12.924-28.86-28.868-28.86z'
        fill='#fff'
      />
    </Svg>
  );
};

export default ResizeHOC(SvgCloud, 1.628930817610063);
