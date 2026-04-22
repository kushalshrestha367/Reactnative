import { createContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { checkLogin } from '../auth';

export const FirebaseAuthContext = createContext();

export const FireBaseAuthprovider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState();
  useEffect(() => {
    checkLogin(setLoggedInUser);
  }, []); 
const contextData = {
    loggedInUser,
}

  return (
    <FirebaseAuthContext.Provider value={contextData}>
      {children}
    </FirebaseAuthContext.Provider>
  );
};
