import React, { FC } from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  ViewStyle,
} from 'react-native';
import { colors } from '../../styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  titleStyle?: StyleProp<ViewStyle>;
}

const Button: FC<ButtonProps> = ({
  title,
  titleStyle,
  style,
  disabled,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style, disabled ? styles.disabled : undefined]}
      {...props}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 16,
    width: 250,
    backgroundColor: colors.primary,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    color: colors.white,
  },
  disabled: {
    backgroundColor: colors.grey,
  },
});

export default Button;
