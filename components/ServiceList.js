import firestore from '@react-native-firebase/firestore';
import React, { useEffect, useState } from 'react';
import {FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';

import {Appbar, TextInput, Button} from 'react-native-paper';
import Service from './Service';

const ServiceList = () => {
   
  const [loading, setLoading] = useState(true);
  const [services, serServices] = useState([]);
  const ref = firestore().collection('services');
 
  useEffect(() => {
    return ref.onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        const {serviceName} = doc.data();
        list.push({
          id: doc.id,
          serviceName
        });
      });

      serServices(list);

      if (loading) {
        setLoading(false);
      }
    });
  }, []);
 
  return (
    <SafeAreaView style={{flex : 1}}>
      
      <FlatList
        data={services}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Service {...item} />}
      />
      
      
    </SafeAreaView>
  );
};
export default ServiceList;