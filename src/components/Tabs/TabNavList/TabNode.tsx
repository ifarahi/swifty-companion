import React, { FC } from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  TextStyle,
  StyleProp,
  StyleSheet,
} from 'react-native';
import { ParsedTabs } from '..';

interface TabNodeProps extends TouchableOpacityProps {
  tab: ParsedTabs;
  textStyle?: StyleProp<TextStyle>;
  onInternalTabClick: (key: string) => void;
}

const TabNode: FC<TabNodeProps> = ({
  tab,
  onInternalTabClick,
  style,
  textStyle,
}) => {
  console.log('tab giving props:', tab.props);
  return (
    <TouchableOpacity
      style={[style, styles.tabNode]}
      onPress={() => onInternalTabClick(tab.key)}>
      <Text style={textStyle}>{tab.props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabNode: {
    width: 50,
    borderWidth: 1,
    borderRadius: 2,
  },
});

export default TabNode;
