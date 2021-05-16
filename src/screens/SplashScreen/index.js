import {useNavigation} from '@react-navigation/core';
import PropType from 'prop-types';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation();
  setTimeout(() => {
    navigation.navigate('AuthStack');
  }, 2000);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 48,
          fontWeight: '700',
        }}>
        ARTISAN
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {},
});

SplashScreen.propTypes = {
  navigation: PropType.object,
};

export default SplashScreen;
