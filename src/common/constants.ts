import {Dimensions} from 'react-native';

export enum SCREEN {
  SCREEN_HEIGHT = Dimensions.get('window').height,
  SCREEN_WIDTH = Dimensions.get('window').width,
}

export enum RESIZE_MODE {
  CONTAIN = 'contain',
  COVER = 'cover',
  STRETCH = 'stretch',
  CENTER = 'center',
  REPEAT = 'repeat',
}

export enum KEYBOARD_TYPES {
  PHONE_PAD = 'phone-pad',
  DEFAULT = 'default',
  NUMBER_PAD = 'number-pad',
}

export enum BUTTON_PRESET {
  CUSTOM = 'custom',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  WITH_ICON = 'with_icon',
}

export enum INPUT_FIELD_PRESETS {
  DOB = 'dob',
  NUMERIC = 'numeric',
  PASSWORD = 'password',
}

export enum APP_ICON_TYPES {
  ANT_DESIGN = 'AntDesign',
  ENTYPO = 'Entypo',
  EVIL_ICONS = 'EvilIcons',
  FEATHER = 'Feather',
  FONT_AWESOME = 'FontAwesome',
  FONT_AWESOME5 = 'FontAwesome5',
  FONT_AWESOME_5PRO = 'FontAwesome5Pro',
  FONT_AWESOME6 = 'FontAwesome6',
  FONT_AWESOME_6PRO = 'FontAwesome6Pro',
  FONTISTO = 'Fontisto',
  FOUNDATION = 'Foundation',
  IONICONS = 'Ionicons',
  MATERIAL_COMMUNITY = 'MaterialCommunityIcons',
  MATERIAL_ICONS = 'MaterialIcons',
  OCTICONS = 'Octicons',
  ZOCIAL = 'Zocial',
}

export enum DATE_FORMAT_TYPE {
  ALPHA_NUMERIC_FULL_DATE = 'DD MMMM YYYY',
  DATE_AND_TIME = 'DD MMM YYYY, hh:mm A', // 15 Jul 2022, 08:09 PM
  DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss', // 15 Jul 2022 08:09:22
  DATE_MONTH = 'D MMM', // 1 Dec
  DATE_TIME_WITHOUT_YEAR = 'DD MMM, hh:mm A', // 15 Jul, 10:10 AM
  MONTH_DATE_TIME_WITHOUT_YEAR = 'MMM DD, hh:mm A',
  FULL_DATE_DASH_FORMAT = 'YYYY-MM-DD',
  FULL_DATE_FORMAT = 'D MMM, YYYY', // 18 Oct, 2022
  FULL_DATE_SLASH_FORMAT = 'DD/MM/YYYY', // ex: 25/05/2022
  FULL_DATE_SLASH_FORMAT_YEAR_FIRST = 'YYYY/MM/DD',
  FULL_DATE_SPACE_FORMAT = 'DD MMM YYYY', // ex: 01 April 2023
  FULL_DATE_HALF_YEAR_SPACE_FORMAT = 'DD MMM YY', // ex: 01 April 23
  FULL_DATE_WITH_DAY_FORMAT = 'dddd, MMM D, YYYY', // ex: Tuesday, Oct 18, 2022
  MONTH_DATE_TIME = 'MMM DD, YYYY hh:mm A', //Feb 22. 2024 08:09 AM
  MONTH_FORMAT = 'MMMM', // ex: November
  NUMERIC_FULL_DATE_REVERSE_FORMAT = 'YYYY-MM-DD', // ex: 2022/05/25
  TIME_DATE_WITHOUT_YEAR = 'hh:mm A, MMM-DD',
  TWELVE_HR_TIME_FORMAT = 'hh:mm A', // ex: 10:30 AM
  TWO_DIGIT_DATE_FORMAT = 'DD/MM/YY', // ex: 25/05/22
  YEAR_FORMAT = 'YYYY', // ex: 2022
  ZULU_FORMAT = 'YYYY-MM-DDTHH:mm:ss[Z]',
}

// Routes

export enum STACK_ROUTES {
  LOGIN = 'LOGIN', // phone number input
  VERIFY_OTP = 'VERIFY_OTP', // otp verify
  BOTTOM_HOME = 'BOTTOM_HOME',
  CHATS = 'CHATS',
}

export enum TAB_ROUTES {
  HOME = 'HOME', //
  WELCOME = 'WELCOME',
  CONTACTS = 'CONTACTS', // user list
  PROFILE = 'PROFILE', // profile
}
