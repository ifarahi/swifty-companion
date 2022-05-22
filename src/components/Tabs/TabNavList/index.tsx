import React, { FC } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useTabsContext } from '../context';
import TabNode from './TabNode';

const TabNavList: FC = () => {
  const { tabs, activeIndex, onInternalTabClick } = useTabsContext();

  return (
    <FlatList
      data={tabs}
      horizontal
      renderItem={({ item, index }) => {
        return (
          <TabNode
            key={item.key}
            tab={item}
            active={index == activeIndex}
            onInternalTabClick={onInternalTabClick}
          />
        );
      }}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
});

export default TabNavList;
