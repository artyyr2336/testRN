import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {RFValue} from '../../../utils/responsiveFontSize';

const HomeIcon = (props) => {
  return (
    <Svg
      width={RFValue(20)}
      height={RFValue(20)}
      viewBox="0 0 22 22"
      {...props}>
      <Path
        d="M8.16051 19.7714V16.7047C8.16049 15.9246 8.79641 15.2908 9.58431 15.2856H12.4704C13.262 15.2856 13.9038 15.9209 13.9038 16.7047V16.7047V19.7809C13.9036 20.4432 14.4376 20.9845 15.1063 21H17.0304C18.9484 21 20.5033 19.4607 20.5033 17.5618V17.5618V8.83784C20.4931 8.09083 20.1388 7.38935 19.5413 6.93303L12.961 1.6853C11.8082 0.771566 10.1695 0.771566 9.01671 1.6853L2.46532 6.94256C1.86555 7.39702 1.51068 8.09967 1.5033 8.84736V17.5618C1.5033 19.4607 3.05817 21 4.97621 21H6.90026C7.58565 21 8.14127 20.4499 8.14127 19.7714V19.7714"
        stroke="#130F26"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default HomeIcon;
