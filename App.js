import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './components/Login';
import Signup from './components/Signup';
import Profil from './components/Profil';
import Analyse from './components/Analyse';
import Signout from './components/Signout';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabScreen() {
  return (
    <Tab.Navigator initialRouteName="Analyse">
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{ title: 'Profil' }}
      />
      <Tab.Screen
        name="Analyse"
        component={Analyse}
        options={{ title: 'Analyse' }}
      />
      <Tab.Screen
        name="Signout"
        component={Signout}
        options={{ title: 'Signout' }}
      />
    </Tab.Navigator>
  );
}

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
            component={TabScreen}
            options={{ title: 'Mue' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }  
};

export default App;