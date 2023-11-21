import React, { Text, TouchableOpacity, ViewStyle } from 'react-native';
import styles from './styles';

interface ButtonProps {
  onPress: () => void;
  label: string;
  variant?: 'primary' | 'danger';
  disabled?: boolean;
  wrapperStyles?: ViewStyle;
}

const Button = ({
  onPress,
  label,
  variant = 'primary',
  disabled,
  wrapperStyles,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonWrapper,
        wrapperStyles,
        variant === 'primary' && styles.primaryButtonWrapper,
        variant === 'danger' && styles.dangerButtonWrapper,
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text
        style={[
          styles.buttonText,
          variant === 'primary' && styles.primaryButtonText,
          variant === 'danger' && styles.dangerButtonText,
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
