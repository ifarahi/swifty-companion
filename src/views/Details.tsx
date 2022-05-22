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
import { TabPane } from '../components/Tabs';
import ProjectInfo from '../components/ProjectInfo';
import { mapUser } from '../helpers/ft-api';
import Skill from '../components/Skill';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details: FC<DetailsProps> = ({ route }) => {
  const userData = mapUser(route.params.userData);

  console.log('project: ', userData.projects[0]);

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
            source={{ uri: userData.imageUrl }}
            style={styles.profileImage}
          />
        </View>
        <Tabs style={styles.tabs} defaultActiveKey="skills">
          <TabPane key="profile" title="Profile">
            <Text>Profile tab</Text>
          </TabPane>
          <TabPane key="projects" title="Projects">
            <FlatList
              data={userData.projects}
              renderItem={({ item }) => {
                return (
                  <ProjectInfo
                    key={item.id}
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
              data={userData.skills}
              renderItem={({ item }) => {
                return (
                  <Skill
                    key={item.id}
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
