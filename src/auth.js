//from firebase documentation: https://rnfirebase.io/auth/usage#email-and-password-authentication
import auth, { getAuth } from '@react-native-firebase/auth';
import { Alert } from 'react-native';

//email and password from firebase documentation: https://rnfirebase.io/auth/usage#email-and-password-authentication
export const registerUser = async (email, password) => {
  try {
    const userDetails = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    await userDetails.user.sendEmailVerification();
    return userDetails;
  } catch (error) {
    console.error(error.code);
    throw new Error(error.code);
  }
};

export const loginUser = async (email, password) => {
  try {
    const userDetails = await auth().signInWithEmailAndPassword(
      email,
      password,
    );
    const user = userDetails.user;
    return { user, isEmailVerified: user.emailVerified };
  } catch (error) {
    console.error(error.code);
    throw new Error(error.code);
  }
};

export const resetPassword = async email => {
  try {
    await auth().sendPasswordResetEmail(email);
    return;
  } catch (error) {
    console.error(error.code);
    throw new Error(error.code);
  }
};

export const checkLogin = async (setLoggedInUser) => {
 try {
    await getAuth().onAuthStateChanged((user) => {
      setLoggedInUser(user);
  });
 } catch (error) {
   throw new Error(error.code);
 } 
};


export const logoutUser = async () => {
  try {
    await auth().signOut();
    Alert.alert('Logout', 'Logout successful');
    // navigate('Login');
  } catch (error) {
    console.error(error.code);
    throw new Error(error.code);
  }
};