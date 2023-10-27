/* eslint-disable prettier/prettier */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccessRegister from '../screens/AccessRegister';
import Signin from '../screens/Signin';
import Login from '../screens/Login';



const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="AccessRegister"
        component={AccessRegister}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export { MainStack};
