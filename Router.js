import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from './screens/SignIn';
import Home from './screens/Home'
import Service from './screens/Service';
import AddService from './screens/AddService';
import ServiceDetail from './screens/ServiceDetail';
import EditService from './screens/EditService';
import SignUp from './screens/SignUp';
import ChangeInfo from './screens/ChangeInfo';
import Info from './screens/Info';
import Orders from './screens/Orders';
import OrdersDetails from './screens/OrderDetails';

const Stack = createStackNavigator();

const Router = ({ navigation }) => {
  return (
    // <AddService/>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={SignIn} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Service" component={Service} options={{headerTitle: "Dịch vụ"}}/>
      <Stack.Screen name="AddService" component={AddService} options={{headerTitle: "Thêm dịch vụ"}}/>
      <Stack.Screen name="DetailsService" component={ServiceDetail} options={{headerTitle: "Chi tiết dịch vụ"}}/>
      <Stack.Screen name="EditService" component={EditService} options={{headerTitle: "Sửa dịch vụ"}}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name="ChangeInfo" component={ChangeInfo} />
      <Stack.Screen name="Info" component={Info} />
      <Stack.Screen name="Orders" component={Orders} options={{headerTitle: "Đặt dịch vụ"}}/>
      <Stack.Screen name="OrdersDetails" component={OrdersDetails} options={{headerTitle: "Chi tiết đặt"}}/>
    </Stack.Navigator>


  );
}

const styles = StyleSheet.create({})

export default Router;