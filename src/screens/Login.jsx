import React, { useContext, useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import styles from '../styles/form';
import {AuthContext} from '../context/AuthContext'


const Login = ({navigation}) => {
    const {loginUser} = useContext(AuthContext);
      const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    
    const onSubmit = () => {
        const isLoginSuccess = loginUser(email, password);
        if(isLoginSuccess){
            navigation.navigate('Home');
        }   
    };
  

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>

      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        style={styles.input}
        placeholderTextColor="#999"
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.input}
        placeholderTextColor="#999"
        onChangeText={setPassword}

      />

      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 15,
        }}
      >
        <Text style={{ color: '#555' }}>Not registered ? </Text>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={{ color: '#e2b24a', fontWeight: 'bold' }}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
