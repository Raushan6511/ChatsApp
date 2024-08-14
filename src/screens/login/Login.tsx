import React, {useState} from 'react';
import {Button, LogBox, Text, TextInput, View} from 'react-native';

import {styles} from './login-styles';
import {sendVerificationCode} from '../../services/api';
import {KEYBOARD_TYPES, STACK_ROUTES} from '../../common/constants';
import CHInputBox from '../../components/input-box/CHInputBox';
import CHButton from '../../components/button/CHButton';
import CHAppBackground from '../../components/app-background/CHAppBackground';
interface PhoneNumberInputProps {
  route: any;
  navigation: any;
}

const Login: React.FC<PhoneNumberInputProps> = ({route, navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [validation, setValidation] = useState({
    isFirstNameValid: true,
    isLastNameValid: true,
    isPhoneNumberValid: true,
  });

  const handleValidation = () => {
    setValidation({
      ...validation,
      isFirstNameValid: !!firstName.length,
      isLastNameValid: !!lastName.length,
      isPhoneNumberValid: !!(phoneNumber.length === 10),
    });
    return phoneNumber.length === 10 && firstName.length && lastName.length;
  };

  const handleSendCode = async () => {
    if (handleValidation()) {
      try {
        await sendVerificationCode(`+91${phoneNumber}`);
        console.log('firstName', firstName);
        console.log('lastName', lastName);
        console.log('phoneNumber', phoneNumber);
        navigation.navigate(STACK_ROUTES.VERIFY_OTP, {
          phoneNumber: `+91${phoneNumber}`,
        });
      } catch (error: any) {
        console.error(error);
      }
    } else {
      console.log('all field are required');
    }
  };

  const handlePhoneNumberInput = (data: string) => {
    setPhoneNumber(data);
    setValidation({...validation, isPhoneNumberValid: true});
  };

  const handleFirstName = (data: string) => {
    setFirstName(data);
    setValidation({...validation, isFirstNameValid: true});
  };

  const handleLastName = (data: string) => {
    setLastName(data);
    setValidation({...validation, isLastNameValid: true});
  };

  return (
    <CHAppBackground>
      <View style={styles.container}>
        <CHInputBox
          label="FirstName*"
          placeholder={'Enter your FirstName'}
          value={firstName}
          onChangeText={handleFirstName}
          secureTextEntry={false}
          multiline={false}
          isEmpty={!validation.isFirstNameValid}
        />
        <CHInputBox
          label="LastName*"
          placeholder={'Enter your LastName'}
          value={lastName}
          onChangeText={handleLastName}
          secureTextEntry={false}
          multiline={false}
          isEmpty={!validation.isLastNameValid}
        />
        <CHInputBox
          label="Phone*"
          placeholder={'Enter your Phone Number'}
          value={phoneNumber}
          onChangeText={handlePhoneNumberInput}
          secureTextEntry={false}
          multiline={false}
          keyboardTypes={KEYBOARD_TYPES.PHONE_PAD}
          isEmpty={!validation.isPhoneNumberValid}
        />
        <CHButton
          title={'Get OTP'}
          buttonHandler={handleSendCode}
          customButtonStyle={{marginTop: 80}}
        />
      </View>
    </CHAppBackground>
  );
};

export default Login;
