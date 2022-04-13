import React, { useState, createContext, useEffect, useContext } from 'react';
import { authorize } from '../api';
import { getAuthData, storeAuthData } from '../helpers';

interface AuthContextType {
  authorized: boolean;
  setAuthorized: (state: boolean) => void;
  auth: () => void;
}

const AuthContext = createContext<AuthContextType>({
  authorized: false,
  setAuthorized: () => null, // dummy func
  auth: () => null, // dummy func
});

export const AuthProvider = ({ children }: any) => {
  const [authorized, setAuthorized] = useState(false);

  const auth = async () => {
    const authData = await authorize();
    storeAuthData(authData);
    setAuthorized(true);
  };

  const isAuthorized = async () => {
    const authD = await getAuthData();
    if (authD) {
      console.log(authD);
      setAuthorized(true);
    }
  };

  const contextValue = {
    authorized,
    setAuthorized,
    auth,
  };

  useEffect(() => {
    isAuthorized();
  }, []);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthContext should be called within a AuthProvider');
  }
  return context;
};
