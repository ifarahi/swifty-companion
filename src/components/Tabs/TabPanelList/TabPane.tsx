import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { TabNodeExternalProps } from '../TabNavList/TabNode';

export interface TabPaneProps extends ViewProps, TabNodeExternalProps {
  children?: React.ReactNode;
  key?: string;
  active?: boolean;
  title: string;
}

const TabPane: React.FC<TabPaneProps> = ({ children, active, style }) => {
  return (
    <View style={[styles.tabNavContaine, style]}>{active && children}</View>
  );
};

const styles = StyleSheet.create({
  tabNavContaine: {
    marginVertical: 16,
  },
});

export default TabPane;
