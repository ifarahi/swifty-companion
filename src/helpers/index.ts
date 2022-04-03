import AsyncStorage from '@react-native-async-storage/async-storage';

const AUTH_DATA_KEY = 'AUTH_DATA';

const storeData = async (key: string, value: any) => {
  try {
    const serielizedValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, serielizedValue);
  } catch (error) {
    console.error('Error saving data');
  }
};

const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value != null ? JSON.parse(value) : null;
  } catch (e) {
    console.error('Error reading value');
  }
};

export const storeAuthData = (authData: any) =>
  storeData(AUTH_DATA_KEY, authData);

export const getAuthData = () => getData(AUTH_DATA_KEY);
