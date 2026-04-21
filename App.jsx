// // import React, { createContext } from 'react'
// // import {
// //   Image,
// //   Text,
// //   View,
// //   TextInput,
// //   Button,
// //   TouchableOpacity,
// //   Pressable,
// //   TouchableHighlight,
// //   TouchableWithoutFeedback
// // } from 'react-native'

// // import Introduction from './src/Components/Introduction'
// // import EventHandling from './src/Components/EventHandling'
// // import LoginForm from './src/Components/LoginForm'
// // import StateManagement from './src/Components/StateManagement'
// // import Flast from './src/Components/Flast'
// // import Nav from './src/Components/Nav'
// // import Home from './src/Components/Home'
// // import About from './src/Components/About'
// // import Contact from './src/Components/Contact'
// // import ListRendering from './src/Components/ListRendering'
// // import CustomModal from './src/Components/CustomModal'
// // import SectionLists from './src/Components/SectionLists'
// // import DialogBox from './src/Components/DialogBox'
// // import {Authprovider} from './src/context/AuthContext'


// import { NavigationContainer } from '@react-navigation/native'
// // import { createNativeStackNavigator } from '@react-navigation/native-stack'
// // import { createDrawerNavigator } from '@react-navigation/drawer'
// // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// // import Login from './src/screens/Login'
// // import Register from './src/screens/Register'

// // // Custom Button Component
// // const RoundedButton = ({ title }) => {
// //   return (
// //     <Pressable
// //       style={({ pressed }) => ({
// //         backgroundColor: pressed ? 'blue' : 'gray',
// //         paddingVertical: 10,
// //         borderRadius: 20,
// //         alignItems: 'center',
// //         marginVertical: 5
// //       })}
// //     >
// //       <Text style={{ color: 'white', fontWeight: 'bold' }}>{title}</Text>
// //     </Pressable>
// //   )
// // }

// // // Enrollment Form Component
// // const Enrollment = () => {
// //   return (
// //     <View style={{ padding: 10 }}>
// //       <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
// //         Enrollment Form
// //       </Text>

// //       <TextInput
// //         placeholder='Enter your Name'
// //         style={{ borderWidth: 1, marginVertical: 5, padding: 8 }}
// //       />

// //       <TextInput
// //         placeholder='Enter your Phone number'
// //         style={{ borderWidth: 1, marginVertical: 5, padding: 8 }}
// //       />

// //       <Pressable
// //         style={({ pressed }) => ({
// //           backgroundColor: pressed ? 'green' : 'gray',
// //           paddingVertical: 10,
// //           alignItems: 'center'
// //         })}
// //       >
// //         <Text style={{ color: 'white' }}>Submit</Text>
// //       </Pressable>
// //     </View>
// //   )
// // }

// // // Context
// // export const Context = createContext()

// // // Navigation Stack instance
// // const Stack = createNativeStackNavigator()

// // // drawer
// // const Drawer = createDrawerNavigator()

// // //tabs
// // const BottomTab = createBottomTabNavigator()

// // const App = () => {
// //   return (
// //     <>
// //       {/* Example Components (Uncomment if needed) */}

// //       {/* <RoundedButton title="Register" /> */}
// //       {/* <RoundedButton title="Login" /> */}
// //       {/* <RoundedButton title="Logout" /> */}

// //       {/* <Introduction /> */}
// //       {/* <Enrollment /> */}
// //       {/* <EventHandling /> */}
// //       {/* <StateManagement /> */}

// //       {/* <TextInput placeholder="Type here..." /> */}
// //       {/* <Button title="Click me" color="blue" /> */}

// //       {/* <Image
// //         source={{ uri: "https://images.unsplash.com/photo-1526779259212-939e64788e3c" }}
// //         style={{ width: 300, height: 200 }}
// //       /> */}

// //       {/* <TouchableOpacity>
// //         <Text>Press Me</Text>
// //       </TouchableOpacity> */}

// //       {/* <TouchableHighlight>
// //         <Text>Highlight Me</Text>
// //       </TouchableHighlight> */}

// //       {/* <TouchableWithoutFeedback>
// //         <Text>Don't Touch Me</Text>
// //       </TouchableWithoutFeedback> */}

// //       {/* Context Example */}
// //       {/* 
// //       <Context.Provider value={[]}>
// //         <Nav />
// //         <LoginForm />
// //       </Context.Provider> 
// //       */}

// //       {/* Auth Example */}
// //       {/* 
// //       <Authprovider>
// //         <Nav />
// //         <Home />
// //       </Authprovider> 
// //       */}

// //       {/* Lists */}
// //       {/* <ListRendering /> */}
// //       {/* <Flast /> */}
// //       {/* <SectionLists /> */}
// //       {/* <DialogBox /> */}
// //       {/* <CustomModal /> */}
     

// //       <NavigationContainer>
// //         {/* <BottomTab.Navigator> */}
// //           {/* <BottomTab.Screen name='Login' component={LoginForm} /> */}
// //           {/* <BottomTab.Screen name='Home' component={Home} /> */}
// //           {/* <BottomTab.Screen name='About' component={About}/> */}
// //           {/* <BottomTab.Screen name='Contact'component={Contact} /> */}
// //           {/* <BottomTab.Screen name='Modal' component={CustomModal} /> */}
// //         {/* </BottomTab.Navigator> */}

// //         {/* <Drawer.Navigator>
// //           <Drawer.Screen name='Sidebar' component={Sidebar} />
// //           <Drawer.Screen name='home' component={Home} />
// //         </Drawer.Navigator> */}

        
// //             <Authprovider>
// //               <Stack.Navigator>
// //             <Stack.Screen name='Login' component={Login} />
// //             <Stack.Screen name='Register' component={Register} />
// //             <Stack.Screen name='Home' component={Home} />
// //           </Stack.Navigator>
// //             </Authprovider>
       


// //       </NavigationContainer>
  
// //     </>
// //   )
// // }

// // const Sidebar = () => {
// //   return(
// //     <Text>This is side bar</Text>
// //   )
// // }

// // export default App



// import React, { useEffect, useState } from 'react'
// import { Text, View } from 'react-native'
// import axios from 'axios'

// const App = () => {
//   const [users, setUsers] = useState([])

//   useEffect(() => {

//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://10.0.2.2:3000/users')
//         // console.log("This is response", response.data)
//         setUsers(response.data)
//       } catch (error) {
//         console.log("This is error", error)
//       }
//     }

//     fetchData()

//   }, [])

//   return (
//     <View>
//       <Text>API Call</Text>
//       <View>
//         {
//            users.map((user) => {
//             return(
//               <View key={user.id}>
//                 <Text>{user.name}</Text>
//                 <Text>{user.email}</Text>
//               </View>
//             )
//            })
//         }
//       </View>
//     </View>
//   )
// }

// export default App


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 

import GetRequest from './src/Components/GetRequest';
import PostRequest from './src/Components/PostRequest';
import PatchRequest from './src/Components/PatchRequest';
// import PutRequest from './src/Components/PutRequest';
import Login from './src/Components/UserAuthentication/Login'
import Register from './src/Components/UserAuthentication/Register'
import ResetPassword from './src/Components/UserAuthentication/ResetPassword';

const AuthStack = createStackNavigator(); 

const App = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        {/* <Stack.Screen name="GetRequest" component={GetRequest} />
        <Stack.Screen name="PostRequest" component={PostRequest} />
        <Stack.Screen name="PatchRequest" component={PatchRequest} /> */}
        {/* <Stack.Screen name="AsyncStoragePractice" component={AsyncStoragePractice} /> */}
    <AuthStack.Screen name='Register' component={Register}/>
        <AuthStack.Screen name='Login' component={Login}/>
        <AuthStack.Screen name='ResetPassword' component={ResetPassword} />
    
      </AuthStack.Navigator>
    </NavigationContainer>
    // <ScrollView>
    //   {/* <AsyncStoragePractice /> */}
    //   <Text>hello</Text>
    // </ScrollView>
  );
};

export default App;