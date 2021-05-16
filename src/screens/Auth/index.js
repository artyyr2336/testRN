import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Authorization from './Authorization';
import MainAuth from './MainAuth';
import Registration from './Registration';
import RegProfile from './RegProfile';

const Lk = createStackNavigator();
const AStack = () => {
  return (
    <Lk.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Lk.Screen name="MainAuth" component={MainAuth} />
      <Lk.Screen name="Authorization" component={Authorization} />
      <Lk.Screen name="Registration" component={Registration} />
      <Lk.Screen name="RegProfile" component={RegProfile} />
    </Lk.Navigator>
  );
};

const AuthStack = () => {
  return <AStack />;
};

export default AuthStack;
