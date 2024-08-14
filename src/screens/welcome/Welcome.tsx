import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './welcome-styles';
import CHAppBackground from '../../components/app-background/CHAppBackground';

const Welcome: React.FC = () => {
  return (
    <CHAppBackground>
      <View style={styles.container}>
        <Text>Welcome Screen</Text>
      </View>
    </CHAppBackground>
  );
};

export default Welcome;
