import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {colors} from '../../../theme';
interface Style {
  container: ViewStyle;
  userContainer: ViewStyle;
  userName: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    // padding: 10,
  },
  userContainer: {
    borderWidth: 1,
    borderColor: colors.background,
    padding: 10,
    backgroundColor: colors.palette.white,
  },
  userName: {
    fontWeight: '800',
    fontSize: 18,
    color: colors.palette.black,
  },
});

export {styles};
