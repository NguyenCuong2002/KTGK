import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, { useContext } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import AddService from '../screens/AddService';
import ServiceList from '../components/ServiceList';
import { UserContext } from '../context/userProvider';
import ServiceDetail from '../screens/ServiceDetail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Update from '../screens/Update';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="AddService"
        component={AddService}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="settings" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Service"
        component={ServiceList}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="mail" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const Navigation = () => {
  const {userInfo} = useContext(UserContext);

  return (
    <>
      {!userInfo ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          /> */}
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Home"
            component={TabNavigation}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="ServiceDetail"
            component={ServiceDetail}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="AddService"
            component={AddService}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Update"
            component={Update}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      )}
    </>
  );
};

export default Navigation;
