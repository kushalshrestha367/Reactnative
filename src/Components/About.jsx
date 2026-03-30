import React from 'react'
import { Button, Text, View } from 'react-native'

//home bata about ma data pathaune tarika
const About = ({navigation, route}) => {
  const { fullName, course } = route.params

    return (
      <View>
       <Text>About Page </Text>
       <Text>Full Name: {fullName}</Text>
       <Text>Course: {course}</Text>
        <Button title='Go to Contact Page'  onPress={() => navigation.navigate('Contact')}/>
      </View>
    )
  }

  export default About
