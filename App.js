/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {StyleSheet, Dimensions, View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {UserProvider} from './context/userProvider';
import Navigation from './navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';

function App() {
  const initial = async () => {
    const ref = firestore().collection('users');

    const admin = {
      email: 'manhcuong@gmail.com',
      password: 'manhcuong',
      role: 'admin',
    };

    await ref.doc(admin.email).onSnapshot(u => {
      if (!u.exists) {
        auth()
          .createUserWithEmailAndPassword(admin.email, admin.password)
          .then(() => {
            ref.doc(admin.email).set({
              ...admin,
            });
          });
      }
    });
  };

  useEffect(() => {
    initial();
  }, []);

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <UserProvider>
          <Navigation />
        </UserProvider>
      </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default App;
