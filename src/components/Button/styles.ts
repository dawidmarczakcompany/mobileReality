import { StyleSheet } from 'react-native';
import { primaryColor } from '../../common/styles';

export default StyleSheet.create({
  buttonWrapper: {
    borderRadius: 8,
    minWidth: 100,
    minHeight: 40,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  buttonText: {
    fontSize: 14,
    textTransform: 'uppercase',
  },
  primaryButtonWrapper: {
    borderColor: primaryColor,
    borderWidth: 2,
  },
  primaryButtonText: {
    color: primaryColor,
    fontWeight: 'bold',
  },
  dangerButtonWrapper: {
    borderColor: 'red',
    borderWidth: 2,
  },
  dangerButtonText: {
    color: 'red',
    fontWeight: 'bold',
  },
});
