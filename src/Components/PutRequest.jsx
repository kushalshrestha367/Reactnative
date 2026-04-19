import axios from 'axios';
import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const PutRequest = () => {
    const [id, setId] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async () => {
        const response = await axios.put(`http://10.0.2.2:3000/users/${id}`, {
        name: fullName,
        email
      })
      Alert.alert('Success', 'User updated successfully');
      console.log(response);
      setId('');
      setFullName('');
      setEmail(''); 
    }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Api Put</Text>
      <TextInput
        placeholder="Enter id"
        placeholderTextColor="#888"
        style={styles.input}
        onChangeText={setId}
        value={id}
      />
      

      <TextInput
        placeholder="Enter Full Name"
        placeholderTextColor="#888"
        style={styles.input}
        onChangeText={setFullName}
        value={fullName}
      />

      <TextInput
        placeholder="Enter Email"
        placeholderTextColor="#888"
        keyboardType="email-address"
        style={styles.input}
        onChangeText={setEmail}
        value={email}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>update</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PutRequest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});