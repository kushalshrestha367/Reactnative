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


// import React, { useState } from 'react'
// import { Button, Text, TextInput, View } from 'react-native'

// const Home = ({navigation}) => {
//   //state for form data
//   const [fullName, setFullName] = useState()
//   const [course, setCourse] = useState()
//     return (
//       <View>
//         <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Register for an account. </Text>
//         <TextInput placeholder='Full name' onChangeText={setFullName} style={{ borderWidth: 1, marginVertical: 4, padding: 8 }} />
//         <TextInput placeholder='Course' onChangeText={setCourse} style={{ borderWidth: 1, marginVertical: 4, padding: 8 }} />
//         //home bata about ma data pathaune tarika
//         <Button title='Register' onPress={() => navigation.navigate('About',{fullName, course})} />
        
//       </View>
//     )
//   }


//   export default Home

import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const {user} = useContext(AuthContext);
  return (
    <View>
      <Text>Welcome Home</Text>
      <Text>{user?.name}</Text>
      <Text>{user?.email}</Text>
    </View>
  );
};

export default Home;

