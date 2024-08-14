import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Styles {
  container: ViewStyle;
  label: TextStyle;
  input: TextStyle;
  multilineInput: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    marginBottom: 10,
  },
  label: {
    marginBottom: 4,
    fontSize: 16,
    color: '#333',
  },
  input: {
    padding: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    fontSize: 16,
    paddingLeft: 15,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export {styles};
