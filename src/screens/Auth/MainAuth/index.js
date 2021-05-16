import PropType from 'prop-types';
import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Vector from '../../../static/img/images/Vector.png';
import {stylesCommon, stylesUi} from '../../../static/styles';

const MainAuth = ({navigation}) => {
  return (
    <View
      style={
        (stylesCommon.mainContainer, {position: 'relative', height: '100%'})
      }>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 90}}>
        <Text style={{fontSize: 48, fontWeight: 'bold'}}>ARTISAN</Text>
      </View>
      <View
        style={{
          marginTop: 100,
          flexDirection: 'row',
          height: 280,
          width: '100%',
        }}>
        <ImageBackground
          source={Vector}
          style={{
            resizeMode: 'center',
            justifyContent: 'center',
            marginLeft: 40,
            width: '100%',
            paddingHorizontal: 40,
          }}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>
            Show me what you can do. Prove that you are the {'\n'} best
          </Text>
        </ImageBackground>
      </View>
      <View style={{position: 'absolute', bottom: 45, right: 70, left: 70}}>
        <TouchableOpacity
          style={[stylesUi.btn, stylesUi.btnRed]}
          onPress={() => navigation.navigate('Registration')}>
          <Text style={{color: 'white'}}>Регистрация</Text>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 25,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              textAlign: 'center',
            }}>
            Уже есть аккаунт?{' '}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Authorization')}>
            <Text style={{color: 'rgba(255, 0, 0, 0.6)', fontWeight: 'bold'}}>
              Войдите
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

MainAuth.propTypes = {
  navigation: PropType.object,
};

export default MainAuth;
