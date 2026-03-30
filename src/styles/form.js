import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f7fa',
  },

  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    color: '#333',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#fff',
    elevation: 2, // shadow for Android
  },

  button: {
    backgroundColor: '#e2b24a',
    padding: 14,
    borderRadius: 10,
    marginTop: 15,
    elevation: 3,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
