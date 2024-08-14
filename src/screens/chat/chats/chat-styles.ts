import {StyleSheet, ViewStyle} from 'react-native';
import {colors} from '../../../theme';
interface Style {
  container: ViewStyle;
  messageContainer: ViewStyle;
  chatInputContainer: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    margin: 5,
    padding: 10,
    borderRadius: 15,
  },
  chatInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 5,
  },
});

export {styles};
