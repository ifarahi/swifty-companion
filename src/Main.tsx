import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './views/Login';
import Search from './views/Search';
import { useAuthContext } from './providers/auth-provider';

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
              title: 'Search',
            }}
            name="Search"
            component={Search}
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
