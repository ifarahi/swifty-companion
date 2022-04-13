import React, { FC } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ViewProps,
  StyleProp,
  TextStyle,
} from 'react-native';
import { colors } from '../../styles';

interface LogoProps extends ViewProps {
  headingPrimaryStyle?: StyleProp<TextStyle>;
  headingSecondaryStyle?: StyleProp<TextStyle>;
}

const Logo: FC<LogoProps> = ({
  style,
  headingPrimaryStyle,
  headingSecondaryStyle,
}) => {
  return (
    <View style={style}>
      <Text style={[styles.headingPrimary, headingPrimaryStyle]}>
        Swifty
        <Text style={[styles.headingSecondary, headingSecondaryStyle]}>
          Companion
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headingPrimary: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },
  headingSecondary: { fontSize: 24, fontWeight: '300', color: colors.white },
});

export default Logo;
