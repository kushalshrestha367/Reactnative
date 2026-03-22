import React, { Component } from 'react'
import { Alert, Text, View } from 'react-native'

const Dialog = () => {
    const showAlert = () => {
        Alert.alert("Are you Sure?",
             "Are you sure want to delete this?",
            [
                {
                    text: 'Ok',
                    onPress:() => console.log('Deleted')
                    
                },
                {
                    text: 'wait',
                     onPress:() => console.log('Waited')
                },
                {
                    text:'Cancel',
                     onPress:() => console.log('Canceled')
                }
            ]
            )
    }
    return (
      <View>
        <Text onPress={showAlert}> Delete </Text>
      </View>
    )
  }

  export default Dialog
