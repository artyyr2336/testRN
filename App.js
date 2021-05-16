import {AsyncStorage} from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {useSelector} from 'react-redux';
import AuthStack from './src/screens/Auth';
import MainStack from './src/screens/Main';
import SplashScreen from './src/screens/SplashScreen';

const App = () => {
  const [token, setToken] = useState(null);
  const state = useSelector((state) => state);
  enableScreens();
  const AppStack = createNativeStackNavigator();
  const getTokenStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        setToken(value);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTokenStorage();
  }, []);

  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {token || state.app.authToken ? (
          <AppStack.Screen name="MainStack" component={MainStack} />
        ) : (
          <AppStack.Screen name="AuthStack" component={AuthStack} />
        )}
        <AppStack.Screen name="SplashScreen" component={SplashScreen} />
        {/* <AppStack.Screen name="AuthStack" component={AuthStack} /> */}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
