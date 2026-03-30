import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import form from '../styles/form';
import styles from '../styles/form';
const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register</Text>

      <TextInput
        placeholder="Full Name"
        style={styles.input}
        placeholderTextColor="#999"
      />

      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        style={styles.input}
        placeholderTextColor="#999"
      />

      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.input}
        placeholderTextColor="#999"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 15,
        }}
      >
        <Text style={{ color: '#555' }}>Already registered ? </Text>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{ color: '#e2b24a', fontWeight: 'bold' } }>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
