import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {styles} from './verify-otp-styles';
import {verifyCode} from '../../services/api';
import {KEYBOARD_TYPES, STACK_ROUTES} from '../../common/constants';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {StackNavigatorParamsList} from '../../navigation/types';
import {useAuth} from '../../contexts';
import CHInputBox from '../../components/input-box/CHInputBox';
import CHButton from '../../components/button/CHButton';

interface VerificationCodeInputProps {
  route: any;
}

const VerifyOtp: React.FC<VerificationCodeInputProps> = ({route}) => {
  const {phoneNumber} = route.params;

  const {login} = useAuth();

  const navigation = useNavigation<NavigationProp<StackNavigatorParamsList>>();

  const [code, setCode] = useState<string>('');

  const handleVerifyCode = async () => {
    try {
      const result = await verifyCode(phoneNumber, code);
      if (result.success) {
        await login(result.data._id);

        navigation.navigate(STACK_ROUTES.BOTTOM_HOME);
      } else {
        // navigation.navigate(STACK_ROUTES.LOGIN);
      }
    } catch (error: any) {
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
      {/* <TextInput
        style={styles.input}
        placeholder="Enter verification code"
        keyboardType="number-pad"
        value={code}
        onChangeText={setCode}
      />
      <Button title="Verify Code" onPress={handleVerifyCode} /> */}
      <CHInputBox
        placeholder={'Enter your OTP'}
        value={code}
        onChangeText={setCode}
        secureTextEntry={false}
        multiline={false}
        keyboardTypes={KEYBOARD_TYPES.NUMBER_PAD}
      />
      <CHButton
        title={'Verify OTP'}
        isDisabled={!(code.length === 6)}
        buttonHandler={handleVerifyCode}
      />
    </View>
  );
};

export default VerifyOtp;
