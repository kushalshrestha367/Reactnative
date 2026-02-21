import React from 'react'
import { Text, View } from 'react-native'

const ListRendering = () => {
    const users = ['hari', 'sita', 'gita', 'ram']
    return (
      <View>
        {
            users.map((name,index) => (
                <Text key={index} style={{fontSize:18, padding:5}}>{name}</Text>
            ))
        }
      </View>
    )
  }

export default ListRendering
