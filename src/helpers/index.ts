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

// user data related helpers

type TypeOf =
  | 'string'
  | 'number'
  | 'bigint'
  | 'boolean'
  | 'symbol'
  | 'undefined'
  | 'object'
  | 'function'
  | 'null'
  | 'array';

export default function hasProps(
  props: Record<string, TypeOf[]>,
  object: Record<string, unknown>,
): boolean {
  const propsEntries = Object.entries(props);

  const index = propsEntries.findIndex(function noType(prop) {
    const [key, value] = prop;

    let type: TypeOf;

    if (Array.isArray(object[key])) {
      type = 'array';
    } else if (object[key] == null) {
      type = 'null';
    } else {
      type = typeof object[key];
    }

    return !value.includes(type);
  });

  return index == -1;
}
