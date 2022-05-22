import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { colors } from '../../styles';

interface ProgressBarProps extends ViewProps {
  percentage: number | string;
  color?: string;
  backgroundColor?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  color,
  backgroundColor,
  style,
  ...props
}) => {
  return (
    <View
      style={[
        styles.container,
        style,
        { backgroundColor: backgroundColor ?? colors.darkGrey },
      ]}
      {...props}>
      <View
        style={[
          styles.innerBar,
          {
            backgroundColor: color ?? colors.primary,
            width: `${percentage}%`,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 15,
    borderRadius: 25,
  },
  innerBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 15,
    borderRadius: 25,
  },
});

export default ProgressBar;
