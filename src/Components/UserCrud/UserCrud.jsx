import React, { useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  getUsers,
  addUserData,
  updateUser,
  deleteUser,
} from '../../firestore/firestoreCRUD';

const UserCrud = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [editId, setEditId] = useState(null);

  const [user, setUser] = useState([]);

  const fetchUsers = async () => {
    try {
      const userList = await getUsers();
      setUser(userList);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async () => {
    if (!name || !email || !phone) {
      Alert.alert('Please fill all fields');
      return;
    }

    const userData = {
      name,
      email,
      phone,
    };

    try {
      if (editId) {
        await updateUser(editId, userData);
        Alert.alert('User Updated Successfully');
      } else {
        await addUserData(userData);
        Alert.alert('User Added Successfully');
      }

      fetchUsers();

      setEditId(null);
      setName('');
      setEmail('');
      setPhone('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async id => {
    try {
      await deleteUser(id);
      Alert.alert('User Deleted Successfully');
      fetchUsers();
    } catch (error) {
      Alert.alert('Error deleting user', error.message);
    }
  };

  const handleEdit = user => {
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
    setEditId(user.id);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>User CRUD</Text>

      <View style={styles.formContainer}>
        <Text style={styles.subHeading}>
          {editId ? 'Edit User' : 'Add User'}
        </Text>

        <TextInput
          placeholder="Enter Name"
          placeholderTextColor="#888"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />

        <TextInput
          placeholder="Enter Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />

        <TextInput
          placeholder="Enter Phone"
          placeholderTextColor="#888"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>
            {editId ? 'Update User' : 'Add User'}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={user}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No User Found</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.info}>{item.email}</Text>
              <Text style={styles.info}>{item.phone}</Text>
            </View>

            <View style={styles.actionContainer}>
              <TouchableOpacity
                style={[styles.actionBtn, styles.editBtn]}
                onPress={() => handleEdit(item)}>
                <Text style={styles.actionText}>Edit</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.actionBtn, styles.deleteBtn]}
                onPress={() => handleDelete(item.id)}>
                <Text style={styles.actionText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default UserCrud;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FB',
    padding: 20,
  },

  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1E293B',
    marginBottom: 20,
  },

  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 20,
    elevation: 4,
  },

  subHeading: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 15,
    color: '#0F172A',
  },

  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 14,
    fontSize: 16,
    backgroundColor: '#F9FAFB',
    color: '#111827',
  },

  button: {
    backgroundColor: '#2563EB',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 5,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    elevation: 3,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },

  info: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 2,
  },

  actionContainer: {
    flexDirection: 'row',
    marginTop: 14,
  },

  actionBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 4,
  },

  editBtn: {
    backgroundColor: '#10B981',
  },

  deleteBtn: {
    backgroundColor: '#EF4444',
  },

  actionText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 18,
    color: '#6B7280',
  },
});