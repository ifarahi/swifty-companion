import React from 'react';
import Main from './src/Main';
import { AuthProvider } from './src/providers/auth-provider';

const App = () => {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
};

export default App;
