import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Views/Login';

import AuthProvider from './Providers';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
          <Stack.Screen name="login" component={Login} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     // marginTop: 32,
//     // paddingHorizontal: 24,
//     fontSize: 21,
//     fontWeight: 'bold',
//     backgroundColor: 'white',
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
