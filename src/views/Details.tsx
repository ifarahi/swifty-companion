import React, { FC } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { colors } from '../styles';
import Tabs from '../components/Tabs/Tabs';
import { TabPane } from '../components/Tabs';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details: FC<DetailsProps> = ({ route }) => {
  const { userData } = route.params;

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
        <Tabs style={styles.tabs} defaultActiveKey="skills">
          <TabPane key="profile" title="Profile">
            <Text>Profile Section</Text>
          </TabPane>
          <TabPane key="projects" title="Projects">
            <Text>Project Section</Text>
          </TabPane>
          <TabPane key="skills" title="Skills">
            <Text>Skills Section</Text>
          </TabPane>
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
    marginTop: 100,
  },
});

export default Details;
