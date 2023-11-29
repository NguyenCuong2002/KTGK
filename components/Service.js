import React,{useContext} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import {List} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import {UserProvider, UserContext} from '../context/userProvider';



const Service = ({serviceName, id}) => {
  const navigation = useNavigation();
  const {userInfo} = useContext(UserContext);

  console.log(serviceName)


  async function toggleComplete() {
    await firestore().collection('services').doc(id).update({});
  }
  async function deleteService(id) {
    await firestore().collection('services').doc(id).delete();
  }

  return (
    <View key={id} style={{borderWidth: 1,marginVertical: 5, borderRadius: 5, paddingVertical: 20, marginHorizontal : 20, display : "flex", flexDirection : "row", justifyContent: "space-between"}}>
      <TouchableHighlight
        style={{ paddingHorizontal: 20}}
        onPress={() => navigation.navigate('ServiceDetail', {serviceName})}>
        <View>
          <Text style={{color: 'black', fontWeight: 'bold'}}>{serviceName}</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate("Update",{serviceName, id})} >
        <Entypo
            style={{fontSize: 20, marginRight: 20, color: 'black'}}
            name="text-document"
          />
      </TouchableHighlight>
      <TouchableHighlight onPress={() => deleteService(id)}>
        <Entypo
            style={{fontSize: 20, marginRight: 20, color: 'black'}}
            name="trash"
          />
      </TouchableHighlight>
    </View>
  );
};

export default Service;