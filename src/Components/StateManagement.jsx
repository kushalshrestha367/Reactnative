import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import Parent from "../Components/Parent"

const StateManagement = () => {
    const [number, setNumber] = useState([]);
    const [display, setDisplay] = useState(true);
    const addNumber = () => {
      setNumber([...number,number.length + 1])
    }


    const [user, setUser] = useState({name: 'hari', age:  23});
    const updateAge = () => {
      setUser({...user, age: user.age+1})
    }

    useEffect(() => {
      console.log('Component mounted');
    }, []);
  return (
    <View>
      <Text>Number: {number.join(', ')}</Text>
      {/* <Button title='Increment' onPress={() => setNumber(number + 1)} /> */}
      <Button title='Add Number' onPress={addNumber} />
      

      <Text>username: {user.name}</Text>
      <Text>age: {user.age}</Text>
      <Button title='Update Age' onPress={updateAge} />


      {
        display?<Parent />:null
      }
     <Button title='toggle' onPress={() => setDisplay(!display)} />

    </View>
  );
};

export default StateManagement;
