import React from 'react'
import { Button, Text, View } from 'react-native'

const About = ({navigation}) => {
    return (
      <View>
        <Text>About Page </Text>
        <Button title='Go to Contact Page'  onPress={() => navigation.navigate('Contact')}/>
      </View>
    )
  }

  export default About
