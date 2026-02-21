import React, { Component, use } from 'react'
import { FlatList, Text, View } from 'react-native'

const Flast = () => {
    const users = [{
        id: 1,
        name:'hari',
        email : 'hari@gmail.com'
    },
    {
        id: 2,
        name:'sita',
        email : 'sita@gmail.com'
    },
    {
        id: 3,
        name:'gita',
        email : 'gita@gmail.com'
    },
    {
        id: 4,
        name:'ram',
        email : 'ram@gmail.com'
    }]
    return (
      <View>
      <FlatList
        data={users}
        keyExtractor={(user) => user.id }
        contentContainerStyle={{padding:20, backgroundColor:'lightblue', margin:10, borderRadius:10}}
        renderItem={({item}) => (
        <View>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
        </View >
        )}
        />
      </View>
    )
  }

export default Flast
