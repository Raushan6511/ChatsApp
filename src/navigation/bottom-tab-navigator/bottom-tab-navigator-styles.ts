import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
// import {Typography} from '../../theme';

// import { AppColors, Typography } from 'theme';
// import { getFontSize, heightPxToDP, widthPxToDP } from 'common/utilities';

// import { SCREEN_HEIGHT } from 'common/constants';

interface Styles {
  container: ViewStyle;
  heading: TextStyle;
  tabContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    // backgroundColor:'red',
    // borderWidth:10,"
  },
  heading: {
    color: 'black',
    fontSize: 14,
    // fontFamily: Typography.regular,
  },
  tabContainer: {
    flex: 1,
    alignItems: 'center',
    // borderWidth: 1,
    justifyContent: 'center',
    paddingTop: 5,
  },
});

export {styles};
