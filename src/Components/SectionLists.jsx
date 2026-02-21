import React from 'react'
import { SectionList, Text, View } from 'react-native'

const SectionLists = () => {
    const items = [
        {
            id: 1,
            title: 'Fruits',
            data: ['Apple', 'Banana', 'Orange']
        },
        {
            id: 2,
            title: 'Vegetables',
            data: ['Carrot', 'Broccoli', 'Spinach']
        }
    ]
    return (
      <View>
        <SectionList
        sections={items}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
           <Text>{item}</Text>
        )}
        renderSectionHeader={({section}) => (
                <Text style={{fontSize:20, fontWeight:'bold', backgroundColor:'lightgray', padding:5}}>{section.title}</Text>

        )}
        />
      </View>
    )
  }

export default SectionLists