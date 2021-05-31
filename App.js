import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Profil from './components/Profil';
import Login from './components/Login';
import Signup from './components/Signup';

const Stack = createStackNavigator();

export class App extends Component {

  constructor(props) {
    super(props);
  }

  render (){
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
  }  
};

export default App;