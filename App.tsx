import React from 'react';
import Main from './src/Main';
import { AuthProvider } from './src/Providers/auth-provider';

const App = () => {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
};

export default App;
