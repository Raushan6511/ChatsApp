import React, {useState} from 'react';
import {Button, LogBox, Text, TextInput, View} from 'react-native';

import {styles} from './profile-styles';
import {handleUserUpdate} from '../../services/api';
import CHAppBackground from '../../components/app-background/CHAppBackground';
interface ProfileInputProps {
  route?: any;
  navigation?: any;
}

const Profile: React.FC<ProfileInputProps> = ({route, navigation}) => {
  // const [firstName, setFirstName] = useState<string>('');
  // const [lastName, setLastName] = useState<string>('');
  // const {phoneNumber} = route.params;

  // const handleCreateUser = async () => {
  //   try {
  //     const data = await handleUserUpdate(phoneNumber, firstName, lastName);
  //     console.log('data', data);

  //     navigation.navigate('UserListScreen', {loggedInUserId: data.data});
  //   } catch (error: any) {
  //     console.error(error);
  //   }
  // };

  // console.log('phoneNumber', phoneNumber);

  return (
    <CHAppBackground>
      <View style={styles.container}>
        <Text>Profile Page</Text>
        {/* <TextInput
        style={styles.input}
        placeholder="Enter your FirstName"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your Lastname"
        value={lastName}
        onChangeText={setLastName}
      />
      <Button title="Create User" onPress={handleCreateUser} /> */}
      </View>
    </CHAppBackground>
  );
};

export default Profile;
