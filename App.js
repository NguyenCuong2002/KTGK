import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {UserProvider} from './context/UseContext';
import Router from './Router';
const Stack = createStackNavigator();

const App = () => {
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
    <UserProvider>
      <NavigationContainer independent={true}>
        <Router />
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;