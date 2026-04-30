import React, { Component, useEffect } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import { getUsers,addUserData, updateUser, deleteUser } from '../../firestore/fireStoreCRUD';


const UserCrud = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const[editId, setEditId]= useState(null);

  const [user, setUser] = useState(null);
  const fetchUsers = async () => {
    try {
      const userList = await getUsers();
      setUser(userList);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);
   
  const handleSubmit = async () => {
    const userData = {
      name,
      email,
      phone
    };
    try {
      if(editId){
        await updateUser(editId, userData);
        // setEditId(null);
        Alert.alert('User Updated Successfully');
      } else {
        await addUserData(userData);
        Alert.alert('User Added Successfully');
      }
      fetchUsers();
      setEditId(null);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      Alert.alert('User Deleted Successfully');
      fetchUsers();
    } catch (error) {
      Alert.alert('Error deleting user:', error.message);
    }
  };

  const handleEdit = (user) => {
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
    setEditId(user.id);
  }
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 32, textAlign: 'center', marginBottom: 20 }}>
        User CRUD
      </Text>
      <View>
        <Text style={{ fontSize: 24, textAlign: 'center' }}>Add User</Text>
        <View>
          <TextInput placeholder="name" value={name} onChangeText={setName} 
          style={{ borderWidth: 1, borderColor: 'gray', marginBottom: 10, padding: 10 }}/>
          <TextInput
            placeholder="email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={{ borderWidth: 1, borderColor: 'gray', marginBottom: 10, padding: 10 }}
          />
          <TextInput
            placeholder="phone"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            style={{ borderWidth: 1, borderColor: 'gray', marginBottom: 10, padding: 10 }}
          />
          <Button title={editId ? 'Update User' : 'Add User'} onPress={handleSubmit}/>
        </View>
      </View>
    </View>
  );
};

export default UserCrud;
