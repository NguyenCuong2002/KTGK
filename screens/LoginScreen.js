import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { UserContext } from '../context/userProvider';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let {loginUser,} = useContext(UserContext);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={() =>loginUser(email, password)}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff', // Adjust the background color as needed
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red', // Use the color of your choice
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray', // Adjust the border color as needed
    borderRadius: 5,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'red', // Adjust the button color as needed
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default LoginScreen;