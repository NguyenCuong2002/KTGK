import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Pressable, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import { UserProvider, UserContext } from '../context/UseContext';
import { Avatar } from 'react-native-paper';

const Setting = ({ navigation }) => {
  const [initializing, setInitializing] = useState(true);
  const { userInfo,logoutUser } = useContext(UserContext);
  const [user, setUser] = useState(null);

    useEffect(() => {
      const unsubscribe = auth().onAuthStateChanged((user) => {
        setUser(user);
        if (initializing) setInitializing(false);
      });
    
      return unsubscribe;
    }, [initializing]);

  if (initializing) return null;
  const handleInfo = () => {
    navigation.navigate('Info', { userId: user ? user.uid : null });
  };

  const handleEdit = () => {
    navigation.navigate('ChangeInfo');
  };

  const handleReset = () => {
    if (userInfo.email) {
      auth()
        .sendPasswordResetEmail(userInfo.email)
        .then(() => {
          Alert.alert('Thông báo', 'Gửi yêu cầu thành công!');
        })
        .catch((error) => {
          Alert.alert('Lỗi', 'Không tìm thấy tài khoản!');
        });
    } else {
      Alert.alert('Lỗi', 'Không tìm thấy tài khoản!');
    }
  };
  const handleLogout = () => {
    Alert.alert(
      '',
      'Bạn có muốn đăng xuất',
      [
        {
          text: 'Hủy',
          style: 'cancel',
        },
        {
          text: 'Có',
          onPress: () => {
            logoutUser();
            navigation.navigate('Login');
          },
          style: 'default',
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={{ backgroundColor: 'white',height: "100%" ,flex: 1, alignItems : "center", justifyContent : "center"}}>
      <Pressable onPress={handleInfo}>
        <View
          style={{
            flexDirection: 'row',
            
            padding: 20,
            margin: 10,
            marginBottom: 0,
            borderRadius: 10,
          }}
        >
          
          <View style={{ justifyContent: 'center', marginLeft: 10 }}>
            <Text style={{ fontSize: 16, color: '#333' }}>
             Xin chào: {userInfo ? userInfo.email || 'Guest' : 'Guest'}
            </Text>
          </View>
        </View>
      </Pressable>
      <View style={{ padding: 10 }}>
        
        
        <Pressable
          onPress={handleLogout}
          style={{
            alignItems: 'center',
            padding: 15,
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: 'blue',
              fontSize: 18,
              fontWeight: 'bold',
            }}
          >
            Log out
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
   
  },
  text: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    padding: 10,
    fontSize: 17,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#D6E5FA',
    padding: 2,
    borderRadius: 10,
    width: '40%',
    alignItems: 'center',
  },
});

export default Setting;