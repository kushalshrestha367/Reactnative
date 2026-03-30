import React, { createContext, useState } from 'react';
import { Text, View } from 'react-native';

const AuthContext = createContext();

export default AuthContext;

export const Authprovider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const login = () => {
    setIsLoggedIn(true);
    console.log("user logged in");
  };

  const logout = () => {
    setIsLoggedIn(false);
    console.log("user logged out");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


