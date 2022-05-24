import React, { useState, createContext, useEffect, useContext } from 'react';
import { authorize, revoketoken } from '../api';
import { getAuthData, removeAuthData, storeAuthData } from '../helpers';

interface AuthContextType {
  authorized: boolean;
  setAuthorized: (state: boolean) => void;
  auth: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  authorized: false,
  setAuthorized: () => null,
  auth: () => null,
  logout: () => null,
});

export const AuthProvider = ({ children }: any) => {
  const [authorized, setAuthorized] = useState(false);

  const auth = async () => {
    const authData = await authorize();
    storeAuthData(authData);
    setAuthorized(true);
  };

  const isAuthorized = async () => {
    const authData = await getAuthData();

    if (authData) {
      setAuthorized(true);
    }
  };

  const logout = async () => {
    const authData = await getAuthData();
    if (authData) {
      await removeAuthData();
      setAuthorized(false);
    }
  };

  const contextValue = {
    authorized,
    setAuthorized,
    auth,
    logout,
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
