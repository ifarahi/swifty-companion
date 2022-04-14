import React, { FC } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useTabsContext } from '../context';
import TabNode from './TabNode';

const TabNavList: FC = () => {
  const { tabs, onInternalTabClick } = useTabsContext();

  return (
    <FlatList
      data={tabs}
      horizontal
      renderItem={({ item }) => (
        <TabNode tab={item} onInternalTabClick={onInternalTabClick} />
      )}
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