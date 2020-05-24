

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home'
import List from './src/pages/List'
import Profile from './src/pages/Profile'
import ImageScreen from './src/pages/ImageScreen'
import Counter from "./src/pages/Counter";
import ColorsScreen from './src/pages/ColorsScreen'
import TextScreen from './src/pages/TextScreen/TextScreen'
import BoxScreen from './src/pages/BoxScreen/BoxScreen'


const Stack = createStackNavigator();

function App() {

    
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
        <Stack.Screen name="Counter" component={Counter} />
        <Stack.Screen name="ColorsScreen" component={ColorsScreen} />
        <Stack.Screen name="TextScreen" component={TextScreen} />
        <Stack.Screen name="BoxScreen" component={BoxScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;