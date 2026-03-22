import React, {  createContext, useState } from 'react'
import { Image, Text, View , TextInput,Button, TouchableOpacity, Pressable, TouchableHighlight, TouchableWithoutFeedback} from 'react-native'
import Introduction from './src/Components/Introduction'
import EventHandling from './src/Components/EventHandling'
import LoginForm from './src/Components/LoginForm'
import StateManagement from './src/Components/StateManagement'
import Flast from './src/Components/Flast'
import Nav from './src/Components/Nav'
import Home from './src/Components/Home'
import ListRendering from './src/Components/ListRendering'
import CustomModal from './src/Components/CustomModal'
import SectionLists from './src/Components/SectionLists'
import DialogBox from './src/Components/DialogBox'
import { Authprovider } from './src/Components/AuthContext'
import { Event } from 'react-native/types_generated/Libraries/Animated/AnimatedExports'

//custom component
const RoundedButton = ({title}) => {
  return(
    <Pressable
    style={({pressed}) => [{
      backgroundColor: pressed ? 'blue' : 'gray',
      paddingVertical: 10,
      borderRadius: 20,
      alignItems: 'center',
    }]}
    >
      <Text style={{color: 'white', fontWeight: 'bold'}}>{title}</Text>
    </Pressable>
  )
}


const Enrollment = () => {
  return (
    <View>
      <Text style={{fontSize:20, fontWeight:'bold'}}>Enrollment Form</Text>
      <TextInput placeholder='Enter your Name'/>
      <TextInput placeholder='Enter your Phone number' />
      <Pressable
        style={({pressed})=>({
          backgroundColor: pressed ? 'green' : 'gray',
          paddingVertical:10,
        })}
        >
          <Text>Submit</Text>
        </Pressable>
    </View>
  )
}

export const Context = createContext()
const App = () => {
  // const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <View>
        {/* <RoundedButton title="Register"/>
         <RoundedButton title="Login"/>
          <RoundedButton title="Logout"/>
       <Introduction/>
       <Enrollment/> */}
       {/* <EventHandling /> */}
       {/* <StateManagement /> */}
   
     
        {/* <TextInput placeholder="Type here..." keyboardType="default" autoCapitalize="words" secureTextEntry />
        <Button title="click me" color="blue"/>
        <Image
        source={{uri:"https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"}}
        style={{
          width: 300,
          height: 200,
        }}
        />
        <TouchableOpacity>
          <Text>Press Me</Text>
        </TouchableOpacity>

        <TouchableHighlight>
          <Text>Highlight Me</Text>
        </TouchableHighlight>

        <TouchableWithoutFeedback>
          <Text>Don't Touch Me</Text>
        </TouchableWithoutFeedback> */}
        {/* <Context.Provider value={[isDarkMode, setIsDarkMode]}>
        <Nav />
        <Text>{isDarkMode ? "In Dark Mode" : "In Light Mode"}</Text>
          <LoginForm />
        </Context.Provider> */}

        {/* <Authprovider>
          <Nav />
          <Home />
          
        </Authprovider> */}
        {/* <ListRendering /> */}
        {/* <Flast />
        <SectionLists />
        <DialogBox/> */}
        <CustomModal />


       
      </View>
    )
  }


export default App
