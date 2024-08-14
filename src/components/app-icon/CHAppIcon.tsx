import React from 'react';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5ProIcon from 'react-native-vector-icons/FontAwesome5Pro';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import FontAwesome6ProIcon from 'react-native-vector-icons/FontAwesome6Pro';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import ZocialIcon from 'react-native-vector-icons/Zocial';

import {APP_ICON_TYPES} from './constants';

interface IAppIconProps {
  name: string;
  type: string;
  size?: number;
  color?: string;
  iconPress?: () => void;
  iconPressIn?: () => void;
  iconPressOut?: () => void;
}

const iconComponents = {
  [APP_ICON_TYPES.ANT_DESIGN]: AntDesignIcon,
  [APP_ICON_TYPES.EN_TYPO]: EntypoIcon,
  [APP_ICON_TYPES.EVIL_ICONS]: EvilIconsIcon,
  [APP_ICON_TYPES.FEATHER]: FeatherIcon,
  [APP_ICON_TYPES.FONT_AWESOME]: FontAwesomeIcon,
  [APP_ICON_TYPES.FONT_AWESOME5]: FontAwesome5Icon,
  [APP_ICON_TYPES.FONT_AWESOME_5PRO]: FontAwesome5ProIcon,
  [APP_ICON_TYPES.FONT_AWESOME6]: FontAwesome6Icon,
  [APP_ICON_TYPES.FONT_AWESOME_6PRO]: FontAwesome6ProIcon,
  [APP_ICON_TYPES.FONT_ISTO]: FontistoIcon,
  [APP_ICON_TYPES.FOUNDATION]: FoundationIcon,
  [APP_ICON_TYPES.ION_ICONS]: IoniconsIcon,
  [APP_ICON_TYPES.MATERIAL_COMMUNITY]: MaterialCommunityIcon,
  [APP_ICON_TYPES.MATERIAL_ICONS]: MaterialIconsIcon,
  [APP_ICON_TYPES.OCTICONS]: OcticonsIcon,
  [APP_ICON_TYPES.ZOC_IAL]: ZocialIcon,
};

console.log(typeof iconComponents);

const CHAppIcon: React.FC<IAppIconProps> = ({
  name,
  size = 30,
  color = 'black',
  type,
  iconPress = () => {},
  iconPressIn = () => {},
  iconPressOut = () => {},
}) => {
  const IconComponent = iconComponents[type];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      name={name}
      size={size}
      color={color}
      onPress={iconPress}
      onPressIn={iconPressIn}
      onPressOut={iconPressOut}
    />
  );
};

export default CHAppIcon;
