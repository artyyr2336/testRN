import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {RFValue} from '../../../utils/responsiveFontSize';

const Vector = (props) => {
  return (
    <Svg
      width={RFValue(20)}
      height={RFValue(20)}
      viewBox="0 0 283 236"
      {...props}>
      <Path
        d="M140.519 2.20504C86.5186 -5.79496 38.0185 6.70502 9.51858 60.705C-18.9814 114.705 21.5186 134.205 65.0187 134.205C108.519 134.205 128.519 191.705 148.019 218.705C167.519 245.705 231.519 249.705 273.519 151.705C315.519 53.705 194.519 10.205 140.519 2.20504Z"
        fill="#FF0000"
        fill-opacity="0.06"
      />
    </Svg>
  );
};

export default Vector;
