import {createContext, useState} from 'react';
import firestore from '@react-native-firebase/firestore';



export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState();
  const [errMessage, setErrMessage] = useState(null);
  const Users = firestore().collection('users');

  let loginUser = async (email, password) => {
 
  Users.doc(email).onSnapshot( u => {
    if(!u.exists) {
      setErrMessage("Tài khoản hoặc mật khẩu không đúng")
      return;
    }
    const res =  u.data();
     setUserInfo(res);
     setErrMessage(null);
  });
}

  let logoutUser = () => {
    setUserInfo(null);
    console.log(1)
  };
  let contextData = {
    errMessage,
    userInfo,
    loginUser,
    logoutUser,
  };
  return (
    <UserContext.Provider value={{...contextData}}>{children}</UserContext.Provider>
  );
};