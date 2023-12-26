import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Service from './Service';
import Orders from './Orders';
import Setting from './Setting';


const Tab = createBottomTabNavigator();


const getTabBarIcon = icon => ({ tintColor }) => (
  <Icon name={icon} size={26} style={{ color: "black" }} />
);

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName='Service'
      barStyle={{ backgroundColor: "red" }}
      labeled={false}
      activeTintColor={{ color: "red" }}
      inactiveColor={{ color: "red" }}
    >
      <Tab.Screen
        name="Home"
        component={Service}
        options={{
          tabBarIcon: getTabBarIcon('house'),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={Orders}
        options={{
          tabBarIcon: getTabBarIcon('5mp'),
          headerShown: false
        }}
      />
     
      <Tab.Screen
        name="Me"
        component={Setting}
        options={{
          tabBarIcon: getTabBarIcon('supervised-user-circle'),
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;