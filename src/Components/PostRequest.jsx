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

const PostRequest = () => {
    // const [id, setId] = useState('');
    // const [fullName, setFullName] = useState('');
    // const [email, setEmail] = useState('');

    const [formdata, setFormData] = useState({
        id: '',
        name: '',
        email: ''
    })
     const handleInputChange = (key, value) => {
        setFormData({
          ...formdata,
          [key]: value,
        });
      }
    const handleSubmit = async () => {
        const response = await axios.post('http://10.0.2.2:3000/users', formdata);
        
      Alert.alert('Success', 'User added successfully');
      console.log(response);
        setFormData({id: '', name: '', email: ''});
    }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Api Post</Text>
      <TextInput
        placeholder="Enter id"
        placeholderTextColor="#888"
        style={styles.input}
        onChangeText={(value) => handleInputChange('id', value)}
        value={formdata.id}
      />
      

      <TextInput
        placeholder="Enter Full Name"
        placeholderTextColor="#888"
        style={styles.input}
        onChangeText={(value) => handleInputChange('name', value)}
        value={formdata.name}
      />

      <TextInput
        placeholder="Enter Email"
        placeholderTextColor="#888"
        keyboardType="email-address"
        style={styles.input}
        onChangeText={(value) => handleInputChange('email', value)}
        value={formdata.email}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostRequest;

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