import React, {useContext, useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet,TouchableHighlight} from 'react-native';
import {UserContext} from '../context/userProvider';
import firestore from '@react-native-firebase/firestore';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const HomeScreen = ({navigation}) => {
  const {userInfo, logoutUser} = useContext(UserContext);
  const [service, setService] = useState([]);
  const ref = firestore().collection('services');

  useEffect(() => {
    return ref.onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        const {serviceName} = doc.data();
        list.push({
          id: doc.id,
          serviceName,
        });
      });

      setService(list);
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách dịch vụ Spa</Text>
      {userInfo?.role == 'admin' ? (
        <TouchableHighlight
          style={{display: 'flex', alignItems: 'flex-end'}}
          onPress={() => navigation.navigate('AddService')}>
          <MaterialCommunityIcons
            style={{
              backgroundColor: 'pink',
              padding: 14,
              fontSize: 18,
              borderRadius: 10,
            }}
            name="plus"
          />
        </TouchableHighlight>
      ) : null}
      <FlatList
        data={service}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.serviceItem}>
            <Text style={styles.serviceName}>{item.serviceName}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  serviceItem: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 12,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  servicePrice: {
    fontSize: 16,
    color: '#888',
  },
});

export default HomeScreen;
