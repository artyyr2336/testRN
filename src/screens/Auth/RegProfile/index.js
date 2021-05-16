/* eslint-disable */
import PropType from 'prop-types';
import React, {useState} from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import {useDispatch} from 'react-redux';
import HeaderBack from '../../../components/HeaderBack';
import {appLogin} from '../../../redux/action/app';
import ArrowDown from '../../../static/img/icon/ArrowDown';
import {stylesCommon, stylesUi} from '../../../static/styles';

const profInput = [
  {label: 'Менеджер', value: 'manager'},
  {label: 'Программист', значение: 'pc'},
];

const cityInput = [
  {label: 'Москва', value: 'Moscow'},
  {label: 'Казань', значение: 'Kazan'},
];

const RegProfile = ({navigation}) => {
  const [proffesion, setProffesion] = useState(profInput[0]);
  const [city, setCity] = useState(cityInput[0]);

  const dispatch = useDispatch();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{height: '100%'}}>
      <View style={stylesCommon.mainContainer}>
        <HeaderBack goBack={() => goBack()} title="Заполнение профиля" />
        <View>
          <Text style={([stylesUi.mt20, stylesUi.fs14], {textAlign: 'center'})}>
            Введите свое имя и фамилию чтоб ваши друзья могли найти вас.
            Выберите сферу деятельности в которой вы продвигаетесь
          </Text>
        </View>
        <View>
          <TextInput
            style={[stylesUi.input, stylesCommon.mt30]}
            autoFocus={true}
            keyboardType="number-pad"
            placeholder="Имя и фамилия"
            placeholderTextColor="rgba(0, 0, 0, 0.13)"
          />
        </View>
        <View style={stylesCommon.mt10}>
          <RNPickerSelect
            style={{
              ...pickerSelectStyles,
              iconContainer: {
                top: 15,
                right: 10,
              },
            }}
            onValueChange={(value) => setProffesion(value)}
            placeholder={{label: 'Сфера деятельности', value: null}}
            useNativeAndroidPickerStyle={false}
            Icon={() => {
              return <ArrowDown style={{alignItems: 'center'}} />;
            }}
            value={proffesion}
            items={profInput}
          />
        </View>
        <View style={stylesCommon.mt10}>
          <RNPickerSelect
            style={{
              ...pickerSelectStyles,
              iconContainer: {
                top: 15,
                right: 10,
              },
            }}
            onValueChange={(value) => setCity(value)}
            placeholder={{label: 'Город проживания', value: null}}
            useNativeAndroidPickerStyle={false}
            Icon={() => {
              return <ArrowDown style={{alignItems: 'center'}} />;
            }}
            value={city}
            items={cityInput}
          />
        </View>
        <TouchableOpacity
          onPress={() => dispatch(appLogin('123asd123asd123asd123asd'))}
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

RegProfile.propTypes = {
  navigation: PropType.object,
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ebebeb',
    borderRadius: 5,
    color: 'black',
    fontWeight: 'bold',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ebebeb',
    borderRadius: 5,
    color: 'black',
    fontWeight: 'bold',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default RegProfile;
