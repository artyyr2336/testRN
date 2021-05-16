import PropType from 'prop-types';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ArrowLeft from '../../static/img/icon/ArrowLeft.png';

const HeaderBack = ({goBack, title}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 40,
      }}>
      <TouchableOpacity
        style={{height: 24, width: 24}}
        onPress={() => goBack()}>
        <Image style={{height: '100%', width: '100%'}} source={ArrowLeft} />
      </TouchableOpacity>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>{title}</Text>
    </View>
  );
};

HeaderBack.propTypes = {
  navigation: PropType.object,
};

export default HeaderBack;
