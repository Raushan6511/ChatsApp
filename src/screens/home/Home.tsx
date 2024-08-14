import React from 'react';
import {Button, ImageBackground, Text, View} from 'react-native';

import {styles} from './home-styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CHAppIcon from '../../components/app-icon/CHAppIcon';
import {APP_ICON_TYPES, STACK_ROUTES} from '../../common/constants';
import {colors} from '../../theme';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {StackNavigatorParamsList} from '../../navigation/types';
import {useAuth} from '../../contexts';

import CHAppBackground from '../../components/app-background/CHAppBackground';
interface HomeProps {
  route: any;
  navigation: any;
}
const Home: React.FC<HomeProps> = () => {
  const {logout} = useAuth();
  const navigation = useNavigation<NavigationProp<StackNavigatorParamsList>>();
  const handleSignOut = async () => {
    await logout();
    navigation.navigate(STACK_ROUTES.LOGIN);
  };
  return (
    <CHAppBackground>
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title="Sigh Out" onPress={handleSignOut} />
      </View>
    </CHAppBackground>
  );
};

export default Home;
