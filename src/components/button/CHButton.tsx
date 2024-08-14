import React from 'react';
import {Text, Pressable, StyleProp, ViewStyle} from 'react-native';

// import {colors} from '@colors';
// import {BUTTON_PRESET} from '@common';

import {styles} from './chbutton-styles';
import {colors} from '../../theme';
import {BUTTON_PRESET} from '../../common/constants';

interface ITRButtonType {
  title: string;
  customButtonStyle?: StyleProp<ViewStyle>;
  buttonHandler: () => void;
  titleColor?: string;
  buttonType?: string;
  isDisabled?: boolean;
}

const CHButton: React.FC<ITRButtonType> = props => {
  const {
    title,
    customButtonStyle,
    buttonHandler,
    titleColor = colors.palette.white,
    buttonType = BUTTON_PRESET.PRIMARY,
    isDisabled = false,
  } = props;
  console.log('isDisabled', isDisabled);

  const getButtonStyle = () => {
    let buttonStyle = {};
    switch (buttonType) {
      case BUTTON_PRESET.PRIMARY:
        buttonStyle = [
          styles.button,
          styles.primaryButton,
          customButtonStyle,
          isDisabled && styles.disable,
        ];
        break;
      case BUTTON_PRESET.SECONDARY:
        buttonStyle = [
          styles.button,
          styles.secondaryButton,
          customButtonStyle,
          isDisabled && styles.disable,
        ];
        break;
      case BUTTON_PRESET.CUSTOM:
        buttonStyle = [
          styles.button,
          customButtonStyle,
          isDisabled && styles.disable,
        ];
        break;
      default:
        buttonStyle = {};
    }
    return buttonStyle;
  };

  return (
    <Pressable
      onPress={
        isDisabled
          ? () => {
              console.log('Button Disabled');
            }
          : buttonHandler
      }
      style={getButtonStyle}>
      <Text style={[styles.title, {color: titleColor}]}>{title}</Text>
    </Pressable>
  );
};

export default CHButton;
