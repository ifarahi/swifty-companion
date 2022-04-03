import React, { useContext, createContext, useState, useEffect } from 'react';
import { authorize } from 'react-native-app-auth';

const AuthContext = createContext<any>({});

const config = {
  clientId: 'c71337b66ddf283e6919ec3894ffca705d0263601227f579d50f7a04f99be4e1',
  clientSecret:
    '93c08c81311534ffe76880c083cbfa624ac3820bc1a29c00f35bea36c6a994f3',
  redirectUrl: 'com.myswiftycompanion://callback',
  scopes: ['public'],
  serviceConfiguration: {
    authorizationEndpoint: 'https://api.intra.42.fr/oauth/authorize',
    tokenEndpoint: 'https://api.intra.42.fr/oauth/token',
    // revocationEndpoint: "",
  },
};

const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState<any>();

  useEffect(() => {
    const autorizeUser = async () => {
      const auth = await authorize(config);
      console.log(auth);
      setAuthState(auth);
    };
    autorizeUser().catch(console.error);
  }, []);

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthContext should be used within an AuthProvider');
  }
  return context;
};

export default AuthProvider;
