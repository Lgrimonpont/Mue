import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Profil from './Profil';
import Login from './Login';
import Signup from './Signup';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Mue' }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ title: 'Mue' }}
        />
        <Stack.Screen
          name="Profil"
          component={Profil}
          options={{ title: 'Mue' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;