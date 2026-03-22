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
            data: ['Carrot', 'Broccoli', 'Cauli']
        }
    ]
    return (
      <View>
        <SectionList
        sections={items}
        keyExtractor={(item,index) => index}
        renderItem={({item}) => (
           <Text>{item}</Text>
        )}
        renderSectionHeader={({section: {title}}) => (
                <Text style={{fontSize:20, fontWeight:'bold', backgroundColor:'lightgray', padding:5}}>{title}</Text>

        )}
        />
      </View>
    )
  }

export default SectionLists