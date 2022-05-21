import React, { FC } from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { ParsedTabs } from '..';
import { colors } from '../../../styles';

export interface TabNodeExternalProps {
  tabNodeStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

interface TabNodeProps extends TouchableOpacityProps {
  tab: ParsedTabs;
  active: boolean;
  onInternalTabClick: (key?: string) => void;
}

const TabNode: FC<TabNodeProps> = ({ tab, active, onInternalTabClick }) => {
  const { tabNodeStyle, titleStyle, title } = tab.props;

  return (
    <TouchableOpacity
      style={[styles.container, tabNodeStyle, active ? styles.active : null]}
      onPress={() => onInternalTabClick(tab.key)}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 70,
    borderRadius: 30,
    borderColor: colors.white,
    paddingRight: 8,
    paddingLeft: 8,
    alignItems: 'center',
    paddingVertical: 2,
    marginRight: 10,
  },
  title: {
    color: colors.white,
  },
  active: {
    backgroundColor: colors.primary,
  },
});

export default TabNode;
