import React from 'react';
import Main from './src/Main';
import { AuthProvider } from './src/providers/auth-provider';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <AuthProvider>
      <Main />
      <Toast />
    </AuthProvider>
  );
};

export default App;
