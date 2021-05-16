/*eslint-disable*/
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeIcon from '../../static/img/icon/Home';
import Registration from '../Auth/Registration';
import Home from './Home/Home';

const Tab = createBottomTabNavigator();

const BottomMenu = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          switch (route.name) {
            case 'Home':
              return <HomeIcon />;
          }
          switch (route.name) {
            case 'Plus':
              return <HomeIcon />;
          }
          switch (route.name) {
            case 'Heart':
              return <HomeIcon />;
          }
          switch (route.name) {
            case 'Profile':
              return <HomeIcon />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#f5671a',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Plus" component={Home} />
      <Tab.Screen name="Heart" component={Home} />
      <Tab.Screen name="Profile" component={Home} />
    </Tab.Navigator>
  );
};

const Lk = createStackNavigator();
const LkStack = () => {
  return (
    <Lk.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Lk.Screen name="BottomTabs" component={BottomMenu} />
      <Lk.Screen name="Registration" component={Registration} />
    </Lk.Navigator>
  );
};

const MainStack = () => {
  return (
    <>
      <LkStack />
    </>
  );
};

export default MainStack;
