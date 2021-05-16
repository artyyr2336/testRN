import {StyleSheet} from 'react-native';

const stylesCommon = () => {
  return {
    mainAppContainer: {
      flex: 1,
      backgroundColor: '#fff',
    },
    innerAppContainer: {
      flex: 1,
      paddingHorizontal: 25,
      paddingLeft: 20,
      paddingRight: 20,
    },
    aiCenter: {
      alignItems: 'center',
    },
    mainContainer: {
      paddingHorizontal: 20,
      paddingVertical: 15,
    },
    mt5: {
      marginTop: 5,
    },
    mt10: {
      marginTop: 10,
    },
    mt15: {
      marginTop: 15,
    },
    mt20: {
      marginTop: 20,
    },
    mt30: {
      marginTop: 30,
    },
    mt40: {
      marginTop: 40,
    },
    ml5: {
      marginLeft: 5,
    },
    ml10: {
      marginLeft: 10,
    },
    ml15: {
      marginLeft: 15,
    },
    ml20: {
      marginLeft: 20,
    },
    ml25: {
      marginLeft: 24,
    },
    ml30: {
      marginLeft: 30,
    },
    ml35: {
      marginLeft: 35,
    },
    ml40: {
      marginLeft: 40,
    },
    pt5: {
      paddingTop: 5,
    },
    pt10: {
      paddingTop: 10,
    },
    pt15: {
      paddingTop: 15,
    },
    pt20: {
      paddingTop: 20,
    },
    pb5: {
      paddingBottom: 5,
    },
    pb10: {
      paddingBottom: 10,
    },
    pb15: {
      paddingBottom: 15,
    },
    pb20: {
      paddingBottom: 20,
    },
    pl5: {
      paddingLeft: 5,
    },
    pl10: {
      paddingLeft: 10,
    },
    pl15: {
      paddingLeft: 15,
    },
    pl20: {
      paddingLeft: 20,
    },
    pr5: {
      paddingRight: 5,
    },
    pr10: {
      paddingRight: 10,
    },
    pr15: {
      paddingRight: 15,
    },
    pr20: {
      paddingRight: 20,
    },

    /* Image */
    imgWrapCentered: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    imgFill: {
      ...StyleSheet.absoluteFillObject,
      width: '100%',
      height: '100%',
      zIndex: 1,
    },
  };
};

export default stylesCommon();
