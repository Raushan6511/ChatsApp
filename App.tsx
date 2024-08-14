/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {SafeAreaView, Text} from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import {AuthProvider} from './src/contexts';

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <AuthProvider>
      <SafeAreaView style={{flex: 1}}>
        <RootNavigator />
      </SafeAreaView>
    </AuthProvider>
  );
}

export default App;
