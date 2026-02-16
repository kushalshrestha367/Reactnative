import { View, TextInput, Button, Text  } from 'react-native';
import React, { useState } from 'react';


const EventHandling = () => {

    const [email, setEmail] = useState('')
    function clicked(){
        console.log('Button Clicked')
        console.log(email);
        
    }
    function greet(name){
        console.log('Hello', name) 
    }
  return (
    <View>
      <Text>Display Email: {email}</Text>
      <TextInput
      placeholder='Type your email'
      autoCapitalize="none"
      secureTextEntry={false}
      keyboardType='email-address'
      maxLength={15}
      autoFocus={true}
      selectionColor="red"
      onChangeText={(e) => setEmail(e)}
      // editable={true}

      />
      <Button title='Click' onPress={clicked} />
      <Button title='Press Here' onPress={() => greet("Alice")} />
    </View>
  );
};

export default EventHandling;
