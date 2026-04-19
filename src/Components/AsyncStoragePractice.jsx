import React, { useEffect, useState } from 'react';
import { Alert, Button, Text, TextInput, View, StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStoragePractice = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const [storedName, setStoredName] = useState('');
  const [storedAge, setStoredAge] = useState('');

  const saveUser = async () => {
    await AsyncStorage.setItem('name', name);
    await AsyncStorage.setItem('age', age);
    Alert.alert('Success', 'Name and Age saved successfully');
    setName('');
    setAge('');
  };

  const getUser = async () => {
    try {
      const name = await AsyncStorage.getItem('name');
      const age = await AsyncStorage.getItem('age');

      if (name && age) {
        setStoredName(name);
        setStoredAge(age);
        Alert.alert('Stored Data', `Name: ${name}, Age: ${age}`);
      } else {
        Alert.alert('Error', 'No data found');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeuser = async () => {
    await AsyncStorage.removeItem('name');
    await AsyncStorage.removeItem('age');
    Alert.alert('Success', 'Name and Age removed successfully');
    setStoredName('');
    setStoredAge('');
  };

  const clearAll = async () => {
    await AsyncStorage.clear();
    Alert.alert('Success', 'All data cleared successfully');
    setStoredName('');
    setStoredAge('');
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Async Storage Practice</Text>

      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Enter your age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        style={styles.input}
      />

      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={saveUser} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Get" onPress={getUser} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Remove" onPress={removeuser} color="red" />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Clear All" onPress={clearAll} color="orange" />
      </View>

      {(storedName && storedAge) && (
        <View style={styles.resultBox}>
          <Text style={styles.resultText}>Stored Name: {storedName}</Text>
          <Text style={styles.resultText}>Stored Age: {storedAge}</Text>
        </View>
      )}
    </View>
  );
};

export default AsyncStoragePractice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f6f8',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  buttonContainer: {
    marginVertical: 5,
    borderRadius: 8,
    overflow: 'hidden',
  },
  resultBox: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#e8f5e9',
    borderRadius: 10,
  },
  resultText: {
    fontSize: 16,
    color: '#2e7d32',
    marginBottom: 5,
  },
});