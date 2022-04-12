import React, { FC } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { IconLoader } from '../../icons';
import { colors } from '../../styles';

const Loader: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Loading...</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    width: 200,
    color: colors.white,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 25,
  },
});

export default Loader;
