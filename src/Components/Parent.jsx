import React, {   useEffect, useState } from "react";
import { Text, View } from "react-native";

const Parent = () => {
    const [number, setNumber] = useState(1);

   useEffect(() => {
    console.log('Parent component mounted');
   }, []);

  return (
    <View>
      <Text>Parent Component</Text>
      <Text>Number: {number}</Text>
    </View>
  );
};

export default Parent

