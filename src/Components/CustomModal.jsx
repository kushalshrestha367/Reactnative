import React, { Component, useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Modal } from 'react-native'

const CustomModal = () => {
    const [showModal, setShowModal] = useState(false)
    return (
      <View>
        <Button title='Delete' onPress={() => setShowModal(true)}/>
            <Modal
            visible={showModal}
            transparent={true}
            animationType='slide'
            >
                <View style={popUp.mainContainer}>
                    <View style={popUp.modalContainer}>
                        <Text style={popUp.heading}>Custom Modal</Text>
                        <Text style={popUp.text}>Hello ! this is custom modal.</Text>
                        <TouchableOpacity onPress={() => setShowModal(false)} style={popUp.btnStyles}>
                            <Text>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
      </View>
    )
  }

  const popUp = StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.5)',
        padding:40
    },
    modalContainer: {
        backgroundColor:'white',
        width:'100%',
        paddingHorizontal:40,
        paddingVertical:20,
        borderRadius:8,
        boxShadow:'1px 1px 10px rgba(0,0,0,0.5)'
    },
    heading:{
        fontSize:24,
        color: 'red',
        marginBottom: 10
    },
    text:{
        fontSize: 18,
        marginBottom: 40
    },
    btnStyles:{
        margin:'auto',
        paddingVertical:15,
        paddingHorizontal:30,
        backgroundColor: 'lightgreen',
        borderRadius:50,
        marginBottom:20
    }
  })


export default CustomModal
