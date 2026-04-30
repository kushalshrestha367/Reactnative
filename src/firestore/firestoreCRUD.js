import firestore from '@react-native-firebase/firestore';

export const addUserData = async(userData) => {
    try {
        await firestore().collection('users').add(userData);
        console.log("User Added Successfully");
        
    } catch (error) {
        console.error('Error adding user data:', error);
    }
}

export const getUsers = async () => {
    try {
        const fetchData = await firestore().collection('users').get();
        const users = fetchData.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log('Fetched Users:', users);
        return users;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

export const updateUser = async (id, newUserData) => {
    try {
        await firestore().collection('users').doc(id).update(newUserData);
        console.log('User data updated successfully');
    }
    catch (error) {
        console.error('Error updating user data:', error);
    }
}


export const deleteUser = async (id) => {
    try {
        await firestore().collection('users').doc(id).delete();
        console.log('User deleted successfully');
    }
    catch (error) {
        console.error('Error deleting user data:', error);
    }
}