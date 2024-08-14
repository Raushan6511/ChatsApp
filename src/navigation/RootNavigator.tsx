import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import OtpVerify from '../screens/verify-otp/VerifyOtp';
// import PhoneInput from '../screens/login/Login';
// import Home from '../screens/home/Home';
// import Profile from '../screens/profile/Profile';
import Chats from '../screens/chat/chats/Chats';
// import Users from '../screens/chat/users/Users';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Welcome from '../screens/welcome/Welcome';
import BottomTabNavigator from './bottom-tab-navigator/BottomTabNavigator';
import {STACK_ROUTES} from '../common/constants';
import Login from '../screens/login/Login';
import VerifyOtp from '../screens/verify-otp/VerifyOtp';
import {useAuth} from '../contexts';
interface RouteParams {
  header?: string;
}

const RootNavigator: React.FC = () => {
  const {isLoggedIn} = useAuth();
  const Stack = createNativeStackNavigator();

  console.log('RootNavigator');
  console.log('isLoggedIn', isLoggedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen
            name={STACK_ROUTES.BOTTOM_HOME}
            component={BottomTabNavigator}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <Stack.Screen
            name={STACK_ROUTES.LOGIN}
            component={Login}
            options={{
              headerShown: false,
            }}
          />
        )}

        <Stack.Screen name={STACK_ROUTES.VERIFY_OTP} component={VerifyOtp} />

        <Stack.Screen
          name={STACK_ROUTES.CHATS}
          component={Chats}
          options={({route}) => ({
            headerTitle: route.params?.header || STACK_ROUTES.CHATS,
            headerShown: true, // Show the header
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
