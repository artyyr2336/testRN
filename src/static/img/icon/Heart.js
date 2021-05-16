import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {RFValue} from '../../../utils/responsiveFontSize';

const HeartIcon = (props) => {
  return (
    <Svg
      width={RFValue(20)}
      height={RFValue(20)}
      viewBox="0 0 25 24"
      {...props}>
      <Path d="M2.875 11.598c-1.073-3.35.181-7.179 3.698-8.312a6.007 6.007 0 015.43.912c1.455-1.125 3.572-1.505 5.42-.912 3.517 1.133 4.78 4.962 3.707 8.312-1.67 5.31-9.127 9.4-9.127 9.4s-7.402-4.028-9.128-9.4z" />
    </Svg>
  );
};

export default HeartIcon;
