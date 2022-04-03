import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Views/Login';
import Home from './Views/Home';
import { useAuthContext } from './Providers/auth-provider';

const Main = () => {
  const { authorized } = useAuthContext();
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {authorized ? (
          <Stack.Screen
            options={{
              headerShown: false,
              title: 'Home',
            }}
            name="Home"
            component={Home}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
              title: 'Login',
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
