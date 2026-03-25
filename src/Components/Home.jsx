// import React, { useContext } from 'react'
// import { Button, Text, View } from 'react-native'
// import AuthContext from './AuthContext'

// const Home = ({navigation, email}) => {
//     const {isLoggedIn} = useContext(AuthContext)
//     const userEmail = email

//     return (
//       <View>
//         {
//             isLoggedIn ? (  
//                 <Text style={{fontSize:20, fontWeight:'semibold'}}>Welcome to the Home Page. Your email is {email}</Text>
//             ) : (
//                 <Text style={{fontSize:20, fontWeight:'normal', color:'red'}}>Please login to access the Home Page</Text>
//             )
//         }
//         {/* drawernavigator app.js bata aako Sidebar */}
//         <Button title='Go to Menu' onPress={() => navigation.navigate('Sidebar')} />
//       </View>
//     )
//   }

// export default Home


import React from 'react'
import { Button, Text, View } from 'react-native'

const Home = ({navigation}) => {
    return (
      <View>
        <Text>Hello this is HomePage. </Text>
        <Button title='Go to About' onPress={() => navigation.navigate('About')} />
        
      </View>
    )
  }


  export default Home

