import PropType from 'prop-types';
import React from 'react';
import {KeyboardAvoidingView, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {appLogin} from '../../../redux/action/app';
import {stylesCommon, stylesUi} from '../../../static/styles';

const Authorization = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={stylesCommon.mainContainer}>
        <View>
          <Text style={[stylesUi.headerText]}>Авторизация</Text>
        </View>
        <View>
          <Text style={[stylesUi.mt20, stylesUi.fs14]}>
            Введите номер телефона для авторизации{'\n'} в системе
          </Text>
        </View>
        <View>
          <TextInput
            style={[stylesUi.input, stylesCommon.mt30]}
            autoFocus={true}
            keyboardType="number-pad"
            placeholder="79991231212"
            placeholderTextColor="rgba(0, 0, 0, 0.13)"
          />
        </View>
        <View>
          <TextInput
            style={[stylesUi.input, stylesCommon.mt10]}
            placeholder="Пароль"
            placeholderTextColor="rgba(0, 0, 0, 0.13)"
          />
        </View>
        <TouchableOpacity
          onPress={() => dispatch(appLogin('123asd123asd123asd'))}
          style={[
            stylesUi.btn,
            stylesUi.btnGrey,
            stylesCommon.aiCenter,
            stylesCommon.mt20,
          ]}>
          <Text style={{fontWeight: 'bold'}}>Далее</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <Text>Забыли пароль? </Text>
        <TouchableOpacity>
          <Text style={{fontWeight: 'bold'}}>Восстановить</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

Authorization.propTypes = {
  navigation: PropType.object,
};

export default Authorization;
