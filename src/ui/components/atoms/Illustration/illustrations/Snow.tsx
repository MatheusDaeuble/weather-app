import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import ResizeHOC from '../hoc/ResizeHOC';

const SvgSnow = (props: SvgProps) => {
  return (
    <Svg viewBox='0 0 251 251' fill='none' {...props}>
      <Path
        d='M129.306 250.813h-7.195a7.46 7.46 0 01-7.461-7.458V8.28a7.462 7.462 0 017.461-7.462h7.195a7.462 7.462 0 017.461 7.462v235.075c0 4.12-3.34 7.458-7.461 7.458'
        fill='#fff'
      />
      <Path
        d='M169.194 18.983a7.462 7.462 0 01.002 10.553l-43.29 43.313-.168-.197-.199.197-43.31-43.31a7.463 7.463 0 01.005-10.557l5.089-5.08a7.462 7.462 0 0110.549.006l22.586 22.584a7.463 7.463 0 0010.556-.001l22.556-22.575a7.462 7.462 0 0110.555-.002l5.069 5.07M82.223 232.656a7.464 7.464 0 01-.002-10.552l43.291-43.317.169.196.197-.196 43.31 43.301c2.916 2.931 2.915 7.653-.005 10.568l-5.089 5.081c-2.915 2.899-7.636 2.899-10.547-.016L130.96 215.15a7.465 7.465 0 00-10.555 0l-22.556 22.571a7.464 7.464 0 01-10.555 0l-5.071-5.065M.71 129.413v-7.198c0-4.12 3.34-7.458 7.462-7.458h235.074a7.46 7.46 0 017.463 7.458v7.198a7.46 7.46 0 01-7.463 7.458H8.172a7.459 7.459 0 01-7.463-7.458z'
        fill='#fff'
      />
      <Path
        d='M232.543 169.31c-2.914 2.898-7.636 2.915-10.553 0l-43.313-43.3.197-.163-.197-.196 43.31-43.313a7.46 7.46 0 0110.557.005l5.081 5.089a7.467 7.467 0 01-.005 10.552l-22.586 22.587a7.458 7.458 0 00.001 10.552l22.575 22.554a7.458 7.458 0 01.003 10.552l-5.07 5.081M18.875 82.332a7.463 7.463 0 0110.552-.002l43.315 43.289-.197.163.197.211-43.31 43.301a7.47 7.47 0 01-10.56 0l-5.078-5.097c-2.91-2.915-2.909-7.638.005-10.536l22.584-22.587a7.478 7.478 0 00-.001-10.569L13.807 97.952a7.454 7.454 0 01-.002-10.55l5.07-5.07M66.007 185.529l-.012-.016a7.46 7.46 0 010-10.552L174.858 66.104a7.462 7.462 0 0110.554 0l.012.01a7.465 7.465 0 010 10.554L76.559 185.529a7.46 7.46 0 01-10.552 0z'
        fill='#fff'
      />
      <Path
        d='M197.511 93.131c0 4.12-3.34 7.475-7.46 7.475h-38.947l.015-.163h-.189V61.484a7.462 7.462 0 017.468-7.463h.014a7.464 7.464 0 017.457 7.463V78.22a7.462 7.462 0 007.465 7.461l16.712-.006a7.46 7.46 0 017.465 7.456zM53.906 158.497c0-4.12 3.34-7.458 7.46-7.458l38.947-.017-.013.18h.189v38.952c0 4.12-3.347 7.458-7.47 7.458h-.014a7.455 7.455 0 01-7.455-7.458v-16.74c0-4.12-3.344-7.459-7.467-7.459h-16.71c-4.124 0-7.467-3.338-7.467-7.458M65.995 66.114l.012-.01a7.46 7.46 0 0110.552 0l108.865 108.857a7.463 7.463 0 010 10.552l-.012.016a7.462 7.462 0 01-10.554 0L65.995 76.668a7.462 7.462 0 010-10.554'
        fill='#fff'
      />
      <Path
        d='M158.39 197.628c-4.12 0-7.462-3.354-7.464-7.474l-.011-38.936.176.016v-.195h38.952a7.458 7.458 0 017.462 7.474 7.463 7.463 0 01-7.462 7.459h-16.737c-4.121 0-7.463 3.354-7.461 7.474l.006 16.708c.002 4.12-3.338 7.474-7.461 7.474M93.029 54.014a7.46 7.46 0 017.461 7.46l.012 38.953-.174-.017v.18H61.375c-4.125 0-7.466-3.339-7.463-7.459v-.016a7.464 7.464 0 017.463-7.458h16.736a7.463 7.463 0 007.463-7.465l-.008-16.711a7.463 7.463 0 017.463-7.467'
        fill='#fff'
      />
    </Svg>
  );
};

export default ResizeHOC(SvgSnow, 1);
