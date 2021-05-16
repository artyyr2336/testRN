import PropType from 'prop-types';
import React from 'react';
import {KeyboardAvoidingView, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {stylesCommon, stylesUi} from '../../../static/styles';

const Registration = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{height: '100%'}}>
      <View style={stylesCommon.mainContainer}>
        <View>
          <Text style={[stylesUi.headerText]}>Регистрация</Text>
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
        <TouchableOpacity
          onPress={() => navigation.navigate('RegProfile')}
          style={[
            stylesUi.btn,
            stylesUi.btnGrey,
            stylesCommon.aiCenter,
            stylesCommon.mt20,
          ]}>
          <Text style={{fontWeight: 'bold'}}>Далее</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          marginTop: 120,
          paddingHorizontal: 60,
          textAlign: 'center',
        }}>
        Нажимая на кнопку <Text style={{fontWeight: 'bold'}}>Далее</Text> вы
        даете согласие на обработку ваших персональных данных
      </Text>
    </KeyboardAvoidingView>
  );
};

Registration.propTypes = {
  navigation: PropType.object,
};

export default Registration;
