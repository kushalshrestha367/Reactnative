import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import React, { useContext, useState } from 'react';
import { Context } from '../../App';

const LoginForm = () => {
  const [isDarkMode, setIsDarkMode] = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email == null || password == null) {
      Alert.alert('Please fill in all fields');
    } else {
      Alert.alert('Login successful', email);
    }
  };

  const clear = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <View style={{backgroundColor: isDarkMode ? 'black' : 'rgb(127, 244, 113)', padding: 20}}>
      <Text style={styles.heading}>Login Form</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Enter your email"
        autoCapitalize="none"
        value={email}
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Enter your password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button]} onPress={clear}>
        <Text style={styles.text}>Clear</Text>
      </TouchableOpacity>
    </View>
  );
};
export default LoginForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(127, 244, 113)',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputField: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    color: 'white',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'semibold',
  },
});
