import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './views/Login';
import Search from './views/Search';
import { useAuthContext } from './providers/auth-provider';
import Details from './views/Details';
import { RootStackParamList } from './types';

const Main = () => {
  const { authorized } = useAuthContext();
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {authorized ? (
          <>
            <Stack.Screen
              options={{
                headerShown: false,
                title: 'Search',
              }}
              name="Search"
              component={Search}
            />
            <Stack.Screen
              options={{
                headerShown: false,
                title: 'Details',
              }}
              name="Details"
              component={Details}
            />
          </>
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
