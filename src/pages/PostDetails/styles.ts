import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modal: {
    width: '100%',
    margin: 0,
  },
  content: {
    maxHeight: '80%',
    minHeight: '20%',
    padding: 16,
    marginTop: 'auto',
    overflow: 'hidden',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: 'white',
    paddingBottom: 32,
  },
  title: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  description: {
    marginVertical: 8,
  },
});
