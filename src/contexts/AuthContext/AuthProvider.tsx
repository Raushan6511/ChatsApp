import React, {useState, useEffect, ReactNode} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from './AuthContext';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [uId, setUId] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const loadUser = async () => {
      const storedUId = await AsyncStorage.getItem('uId');
      if (storedUId) {
        setUId(storedUId);
        setIsLoggedIn(true);
      }
    };
    loadUser();
  }, []);

  const login = async (userId: string) => {
    await AsyncStorage.setItem('uId', userId);
    setUId(userId);
    setIsLoggedIn(true);
  };

  const logout = async () => {
    await AsyncStorage.removeItem('uId');
    setUId(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{uId, isLoggedIn, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
