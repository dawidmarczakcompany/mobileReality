import React, {
  TextInput as NativeTexInput,
  TextInputProps as NativeTextInputProps,
  Text,
  TextStyle,
} from 'react-native';
import { styles } from './styles';

interface TextInputProps extends NativeTextInputProps {
  errorMessage?: string;
  inputStyles?: TextStyle;
}

const TextInput = (props: TextInputProps) => {
  return (
    <>
      <Text style={styles.errorMessage}>{props.errorMessage}</Text>
      <NativeTexInput style={[styles.input, props.inputStyles]} {...props} />
    </>
  );
};

export default TextInput;
