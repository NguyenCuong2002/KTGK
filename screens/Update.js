import React, { useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { Button, View,TouchableHighlight } from 'react-native';
import { TextInput,Appbar } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';



const Update = ({navigation, route}) => {
  const {serviceName,id} = route.params;

  const [service, setService] = useState(serviceName);
const ref = firestore().collection('services');


  async function updateTodo(id) {
    await firestore()
      .collection('services')
      .doc(id)
      .update({
        serviceName: service,
      });
      navigation.goBack()
  }
  return (
    <View style={{display: 'flex', justifyContent: 'flex-end'}}>
      <Appbar style={{backgroundColor: 'blue', color: 'white'}}>
        <TouchableHighlight onPress={() => navigation.goBack()}>
          <AntDesign
            style={{fontSize: 20, marginRight: 20, color: 'white'}}
            name="arrowleft"
          />
        </TouchableHighlight>
        <Appbar.Content style={{color: 'white'}} title={'Update'} />
      </Appbar>
      <TextInput label={'New Todo'} value={service} onChangeText={(value) => setService(value)} />
      <Button onPress={() => updateTodo(id)} title='Update' />
    </View>
  );
};

export default Update;