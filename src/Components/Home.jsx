import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import AuthContext from './AuthContext'

const Home = () => {
    const {isLoggedIn} = useContext(AuthContext)
    return (
      <View>
        {
            isLoggedIn ? (  
                <Text style={{fontSize:20, fontWeight:'semibold'}}>Welcome to the Home Page</Text>
            ) : (
                <Text style={{fontSize:20, fontWeight:'normal', color:'red'}}>Please login to access the Home Page</Text>
            )
        }
      </View>
    )
  }

export default Home
