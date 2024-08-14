import React, {useEffect, useState} from 'react';
import {View, Button, Text, FlatList, Pressable} from 'react-native';
import axios from 'axios';
import {handleGetAllUsers} from '../../../services/api';
import {useAuth} from '../../../contexts';
import {STACK_ROUTES} from '../../../common/constants';

import {styles} from './contacts-styles';
import {colors} from '../../../theme';
import CHAppBackground from '../../../components/app-background/CHAppBackground';

interface User {
  _id: string;
  firstName: string;
  phoneNumber: string;
  lastMessage: string;
  lastName: string;
}
interface UserListProps {
  route: any;
  navigation: any;
}

const Contacts: React.FC<UserListProps> = ({route, navigation}) => {
  const [users, setUsers] = useState<User[]>([]);
  const {uId} = useAuth();
  console.log('users=>>>>', users);

  const fetchAllUsers = async () => {
    try {
      const response = await handleGetAllUsers(uId || '');
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const renderItem = ({item}: {item: User}) => {
    console.log('contact List user', item);
    const userLabel = `${item?.firstName} ${item?.lastName}`;
    return (
      <Pressable
        style={styles.userContainer}
        onPress={() =>
          navigation.navigate(STACK_ROUTES.CHATS, {
            userId: uId,
            chatUserId: item._id,
            header: item.firstName || item.phoneNumber,
          })
        }>
        <Text style={styles.userName}>{userLabel}</Text>
        <Text>{item.lastMessage}</Text>
      </Pressable>
    );
  };

  return (
    <CHAppBackground>
      <View style={styles.container}>
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={item => item._id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </CHAppBackground>
  );
};

export default Contacts;
