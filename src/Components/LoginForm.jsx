import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const LoginForm = () => {
    return (
        <View style={styles.container}>  
        <Text style={styles.heading}>Login Form</Text>
        <TextInput style={styles.inputField} placeholder='Enter your email' autoCapitalize='none' keyboardType='email-address' />
        <TextInput style={styles.inputField} placeholder='Enter your password' secureTextEntry={true} />
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        </View>
    )
}
export default LoginForm


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(82, 57, 208)',
        paddingVertical: 20,
        paddingHorizontal: 30,
    },
    heading: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    inputField:{
        borderWidth: 1,
        borderColor: 'gray',
        padding: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: 'white',
    },
    button:{
        backgroundColor: 'blue',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        color: 'white',
    },
    text:{
        color: 'white',
        fontWeight:'semibold'
    }
});