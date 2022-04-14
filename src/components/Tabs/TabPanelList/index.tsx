import React, { cloneElement } from 'react';
import { StyleSheet, View } from 'react-native';
import { ParsedTabs } from '..';

interface TabPanelListProps {
  tabs: ParsedTabs[];
  activeKey?: string;
}

const clone = (tab: ParsedTabs) => {
  return React.cloneElement(tab.node, {
    key: tab.key,
    ...tab.props,
    active: true,
  });
};

const TabPanelList: React.FC<TabPanelListProps> = ({ tabs, activeKey }) => {
  const activeIndex = tabs.findIndex((tab) => tab.key === activeKey);

  return (
    <View style={styles.container}>
      <View>
        {activeIndex > -1 ? clone(tabs[activeIndex]) : clone(tabs[0])}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
});

export default TabPanelList;
