import {PixelRatio} from 'react-native';
import {SCREEN} from './constants';
// import {SCREEN_HEIGHT, SCREEN_WIDTH} from './constants';
// import {RFValue} from 'react-native-responsive-fontsize';

const widthPxToDP = (width: string) => {
  // Convert string input to decimal number
  const elemWidth = parseFloat(width);
  return PixelRatio.roundToNearestPixel(
    (SCREEN.SCREEN_WIDTH * elemWidth) / 100,
  );
};

const heightPxToDP = (height: string) => {
  // Convert string input to decimal number
  const elemHeight = parseFloat(height);
  return PixelRatio.roundToNearestPixel(
    (SCREEN.SCREEN_HEIGHT * elemHeight) / 100,
  );
};

/**
 * returns custom responsive font size according to device screen height
 * @param fontSize required font size
 */
// const getFontSize = (fontSize: number): number => {
//   return RFValue(fontSize, 844);
// };

export {widthPxToDP, heightPxToDP};
