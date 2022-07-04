import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import ResizeHOC from '../hoc/ResizeHOC';

const SvgStorm = (props: SvgProps) => {
  return (
    <Svg viewBox='0 0 251 264' fill='none' {...props}>
      <Path
        d='M222.095 92.674c-.125 0-.238.034-.363.035a43.459 43.459 0 003.578-17.29c0-24.098-19.536-43.634-43.634-43.634-8.517 0-16.437 2.479-23.153 6.698C149.438 16.403 127.736.845 102.379.845c-33.53 0-60.71 27.18-60.71 60.71 0 2.534.205 5.017.506 7.468-.17 0-.336-.025-.505-.025-22.482 0-40.706 18.225-40.706 40.706 0 22.48 18.225 40.705 40.706 40.705h180.425c15.944 0 28.869-12.924 28.869-28.868 0-15.944-12.925-28.867-28.869-28.867'
        fill='#C2D9F2'
      />
      <Path
        d='M112.349 167.853l-15.628 47.593h21.548l-13.971 48.303 50.907-68.193h-26.282l9.945-27.703h-26.519z'
        fill='#FBDB60'
      />
    </Svg>
  );
};

export default ResizeHOC(SvgStorm, 0.9507575757575758);