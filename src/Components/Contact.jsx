import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

const Contact = ({navigation}) => {
    return (
      <View>
        <Text> This is Contact Page. </Text>
        <Button title='Go to Next Page' onPress={() => navigation.navigate('Modal')} />

      </View>
    )
  }

  export default Contact
