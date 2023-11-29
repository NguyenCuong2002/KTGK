import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {Appbar} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ServiceDetail = ({route, navigation}) => {
  const {title} = route.params;
  return (
    <View>
      <Appbar style={{backgroundColor: 'blue', color: 'white'}}>
        <TouchableHighlight onPress={() => navigation.goBack()}>
          <AntDesign
            style={{fontSize: 20, marginRight: 20, color: 'white'}}
            name="arrowleft"
          />
        </TouchableHighlight>
        <Appbar.Content style={{color: 'white'}} title={'SPA'} />
      </Appbar>
      <View style={{paddingHorizontal: 20}}>
        <Text style={{color : "black", fontSize : 20}}>Tên dịch vụ : {title}</Text>
      </View>
    </View>
  );
};

export default ServiceDetail;