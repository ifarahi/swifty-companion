import React, { FC } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { colors } from '../styles';
import Tabs from '../components/Tabs/Tabs';
import { TabPanel } from '../components/Tabs';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details: FC<DetailsProps> = ({ route }) => {
  const { userData } = route.params;
  const data = Array(10).fill({ name: 'name' });

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          position: 'absolute',
          top: 15,
          right: 15,
        }}>
        <Text style={{ color: colors.white, fontWeight: '500', fontSize: 16 }}>
          Menu
        </Text>
      </View>
      <View style={styles.details}>
        <View style={styles.profileImageContnainer}>
          <Image
            source={{ uri: userData.image_url }}
            style={styles.profileImage}
          />
        </View>
        <Tabs style={styles.tabs}>
          <TabPanel key="one" style={styles.tabOne} title="tabOne">
            <Text>hello Tab 0</Text>
          </TabPanel>
          <TabPanel key="two" style={styles.tabTwo} title="tabTwo">
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <Text style={{ width: 50 }}>{item.name}</Text>
              )}
              horizontal
              style={{
                marginHorizontal: 10,
              }}
            />
          </TabPanel>
        </Tabs>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingTop: '30%',
  },
  details: {
    height: '100%',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: colors.secondary,
  },
  profileImageContnainer: {
    height: 130,
    width: 130,
    borderWidth: 3,
    borderColor: colors.white,
    backgroundColor: colors.white,
    top: -65,
    alignSelf: 'center',
    borderRadius: 65,
    position: 'absolute',
  },
  profileImage: {
    height: 130,
    width: 130,
    borderWidth: 3,
    borderColor: colors.white,
    backgroundColor: colors.white,
    alignSelf: 'center',
    borderRadius: 65,
  },
  tabs: {
    marginTop: 70,
    borderColor: colors.white,
    borderWidth: 2,
  },
  tabOne: {
    backgroundColor: colors.white,
    marginVertical: 20,
  },
  tabTwo: {
    backgroundColor: colors.white,
    marginVertical: 20,
  },
});

export default Details;
