import { createContext, useState } from 'react';
import { Alert } from 'react-native';

export const AuthContext = createContext();

export const Authprovider = ({ children }) => {
  const userEmail = 'abc@gmail.com';
  const userPassword = '12345678';

  const [userListed, setUserListed] = useState([
    {
        name:'hari bahadur',
        email:'hari@gmail.com',
        password:'12345678'
    },
    {
        name:'sita bahadur',
        email:'sita@gmail.com',
        password:'12345678'
    }
  ])  

  const [user,setUser] = useState('null')
  const loginUser = (email, password) => {
    if (email === '' && password === '') {
      Alert.alert('Login', 'Please enter email and password');
    } else if (email === userEmail && password === userPassword) {
      Alert.alert('Login', 'Login Successfull');
      setUser({ name:'hari bahadur', email:userEmail });
      return true;
    } else {
      Alert.alert('Login', 'Invalid Credentials');
    }
    return false;
  };

   const registerUser = (name,email, password) => {
    if (email === '' || password === '' || name === '') {
      Alert.alert('Register', 'Please enter all fields');
    } else {
      Alert.alert('Register', 'User registered successfully');
      setUser([...{name,email,password}]);
    }
  };



const contextData = {
    user,
    loginUser,
    registerUser
}

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
};
