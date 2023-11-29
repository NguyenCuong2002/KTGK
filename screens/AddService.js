import React, { useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { Button, View,TouchableHighlight } from 'react-native';
import { TextInput,Appbar } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';




const AddService = ({navigation}) => {
  const [service, setService] = useState();
const ref = firestore().collection('services');
  async function addService() {
    await ref.add({
      serviceName: service,
    });
    setService('');
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
        <Appbar.Content style={{color: 'white'}} title={'Them dich vu'} />
      </Appbar>
      {/* <Button title='Back' onPress={() => navigation.goBack()}/> */}
      <TextInput label={'New Service'} value={service} onChangeText={(value) => setService(value)} />
      <Button onPress={() => addService()} title='Them' />
    </View>
  );
};

export default AddService;