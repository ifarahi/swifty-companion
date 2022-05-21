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
        console.log('index: ', index);
        console.log('activeIndex: ', activeIndex);
        return (
          <TabNode
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
