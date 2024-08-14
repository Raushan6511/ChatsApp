import React, {Children, ReactNode} from 'react';
import {ImageBackground} from 'react-native';
import BackgroundImage from '../../assets/images/background_2.png';

type CHAppBackgroundProps = {
  children?: ReactNode;
};
const CHAppBackground: React.FC<CHAppBackgroundProps> = props => {
  const {children} = props;
  return (
    <ImageBackground
      source={BackgroundImage}
      resizeMode="cover"
      style={{flex: 1}}>
      {children}
    </ImageBackground>
  );
};

export default CHAppBackground;
