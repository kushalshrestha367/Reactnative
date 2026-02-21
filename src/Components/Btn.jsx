import React, { useContext }  from 'react'
import { Button, Text, View } from 'react-native'
import { Context } from '../../App'
import AuthContext from './AuthContext'

const Btn = () => {     
    // const [isDarkMode, setIsDarkMode] = useContext(Context)
    const {isLoggedIn, login, logout} = useContext(AuthContext)
    return (
      <View>

      {
        isLoggedIn ? (
          <Button title='Logout' onPress={logout} />
        ) : (
          <Button title='Login' onPress={login} />
        )
      } 
      </View>
    )
  }

export default Btn
