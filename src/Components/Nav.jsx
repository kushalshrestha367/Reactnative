import React, { useContext }  from 'react'
import { Text, View } from 'react-native'
import AuthContext from './AuthContext';
import Btn from './Btn';


const Nav = () => {     
  const { isLoggedIn } = useContext(AuthContext);
    return (    
      <View>
      <Text>{isLoggedIn ? 'User Logged In' : 'User Logged Out'}</Text>
      <Btn />
      
      </View>
    )
  }

export default Nav
