import React from 'react';
import uuid from 'react-native-uuid';
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
import { TabPane } from '../components/Tabs';
import ProjectInfo from '../components/ProjectInfo';
import { mapUser } from '../helpers/ft-api';
import Skill from '../components/Skill';
import Profile from '../components/Profile';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details: React.FC<DetailsProps> = ({ route }) => {
  const userData = mapUser(route.params.userData);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.details}>
        <View style={styles.profileImageContnainer}>
          <Image
            source={{ uri: userData.imageUrl }}
            style={styles.profileImage}
          />
        </View>
        <Tabs style={styles.tabs} defaultActiveKey="profile">
          <TabPane key="profile" title="Profile">
            <Profile
              displayName={userData.displayName}
              login={userData.login}
              email={userData.email}
              wallet={userData.wallet}
              level={userData.level}
            />
          </TabPane>
          <TabPane key="projects" title="Projects">
            <FlatList
              keyExtractor={() => uuid.v4() as string}
              data={userData.projects}
              renderItem={({ item }) => {
                return (
                  <ProjectInfo
                    name={item.name}
                    isMarked={item.isMarked}
                    validated={item.isValidated}
                    percentage={item.finalMark}
                    style={styles.projectInfo}
                  />
                );
              }}
            />
          </TabPane>
          <TabPane key="skills" title="Skills">
            <FlatList
              keyExtractor={() => uuid.v4() as string}
              data={userData.skills}
              renderItem={({ item }) => {
                return (
                  <Skill
                    name={item.name}
                    level={item.level}
                    maxLevel={userData.maxLevel}
                    style={styles.skill}
                  />
                );
              }}
            />
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
    paddingVertical: 16,
  },
  projectInfo: {
    marginBottom: 10,
    width: '95%',
    alignSelf: 'center',
  },
  skill: {
    marginBottom: 18,
  },
});

export default Details;
