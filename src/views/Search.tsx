import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, TextInput } from 'react-native';
import { getUserByUsername } from '../api';
import Button from '../components/Button';
import Loader from '../components/Loader';
import Logo from '../components/Logo';
import Toast from 'react-native-toast-message';
import { colors } from '../styles';
import { RootStackParamList } from '../types';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Search'>;

const Search: FC<DetailsProps> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onUsernameChange = (value: string) => setUsername(value.trim());

  const onSearch = async () => {
    setIsLoading(true);
    const [error, userData] = await getUserByUsername(username);
    if (!error) {
      navigation.navigate('Details', {
        userData,
      });
    } else {
      Toast.show({
        type: 'error',
        text1: ` Could not found any candidate (${username})`,
      });
      setUsername('');
    }
    setIsLoading(false);
  };

  if (isLoading) return <Loader />;

  return (
    <SafeAreaView style={styles.container}>
      <Logo style={styles.logo} />
      <View style={styles.searchContainer}>
        <Text style={styles.headingPrimary}>Find a user</Text>
        <Text style={styles.headingSecondary}>
          Please insert a username in the field below
        </Text>
        <TextInput
          style={styles.searchInput}
          value={username}
          onChangeText={onUsernameChange}
        />
      </View>
      <Button
        title="search"
        style={styles.searchButton}
        titleStyle={styles.searchButtonTitle}
        onPress={onSearch}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    alignItems: 'center',
  },
  logo: {
    marginVertical: 50,
  },
  searchContainer: {
    width: '90%',
    backgroundColor: colors.primary,
    borderRadius: 25,
    padding: 15,
  },
  headingPrimary: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.secondary,
    textAlign: 'center',
    marginBottom: 5,
  },
  headingSecondary: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.secondary,
    textAlign: 'center',
    marginBottom: 15,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: colors.white,
    backgroundColor: colors.white,
    padding: 10,
    textAlign: 'center',
    height: 40,
    borderRadius: 10,
    marginVertical: 20,
  },
  searchButton: {
    width: 100,
    height: 35,
    padding: 5,
    borderRadius: 15,
    backgroundColor: 'transparent',
    borderColor: colors.white,
    borderWidth: 1,
    margin: 50,
  },
  searchButtonTitle: {
    fontSize: 16,
  },
});

export default Search;
