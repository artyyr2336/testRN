import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {RFValue} from '../../../utils/responsiveFontSize';

const ArrowDown = (props) => {
  return (
    <Svg
      width={RFValue(24)}
      height={RFValue(24)}
      viewBox="0 0 24 24"
      {...props}>
      <Path
        d="M19 8.5L12 15.5L5 8.5"
        stroke="#130F26"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default ArrowDown;
