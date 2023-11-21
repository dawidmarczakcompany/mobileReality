import { Dimensions, StyleSheet } from 'react-native';
import { primaryColor } from '../../common/styles';

export const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 64,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  subtitle: {
    color: primaryColor,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  content: {
    marginVertical: 32,
    textAlign: 'center',
    opacity: 0.76,
  },
  image: {
    marginVertical: 32,
    width: Dimensions.get('screen').width,
    height: 300,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
