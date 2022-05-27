import React, { useState } from 'react';
import uuid from 'react-native-uuid';
import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ProjectType } from '../../types';
import ProjectInfo from '../ProjectInfo';
import { colors } from '../../styles';

import closeIcon from '../../icons/closeIcon.png';

interface ProjectsProps {
  projects: ProjectType[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [openSubProjectsList, setOpenSubProjectsList] = useState(false);
  const [subProjects, setSubProjects] = useState<ProjectType[]>([]);
  const [currentParentProjectName, setCurrentParentProjectName] = useState('');

  const onDisplaySubProjects = (
    subProjects: ProjectType[],
    parentProjectName: string,
  ) => {
    if (!subProjects.length) return;

    setOpenSubProjectsList(true);
    setSubProjects(subProjects);
    setCurrentParentProjectName(parentProjectName);
  };

  const onHideSubProjects = () => {
    setOpenSubProjectsList(false);
    setSubProjects([]);
  };

  return (
    <>
      <FlatList
        keyExtractor={() => uuid.v4() as string}
        data={projects}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.projectInfo}
              onPress={() => onDisplaySubProjects(item.projects, item.name)}>
              <ProjectInfo
                name={item.name}
                isMarked={item.isMarked}
                validated={item.isValidated}
                percentage={item.finalMark}
              />
            </TouchableOpacity>
          );
        }}
      />
      <Modal animationType="fade" transparent visible={openSubProjectsList}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.closeIcon}
              onPress={onHideSubProjects}>
              <Image source={closeIcon} width={15} height={15} />
            </TouchableOpacity>
            <Text style={styles.parentProjectName}>
              {currentParentProjectName}
            </Text>
            <View style={styles.listView}>
              <FlatList
                keyExtractor={() => uuid.v4() as string}
                data={subProjects}
                renderItem={({ item }) => {
                  return (
                    <ProjectInfo
                      name={item.name}
                      isMarked={item.isMarked}
                      validated={item.isValidated}
                      percentage={item.finalMark}
                      style={styles.subProjectInfo}
                    />
                  );
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  projectInfo: {
    marginBottom: 10,
    width: '95%',
    alignSelf: 'center',
  },
  modalView: {
    margin: 20,
    marginTop: 230,
    width: '95%',
    height: '60%',
    backgroundColor: colors.secondary,
    borderRadius: 20,
    paddingTop: 45,
    paddingBottom: 35,
    padding: 20,
    alignItems: 'center',
    shadowColor: colors.white,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 5,
  },
  listView: {
    marginTop: 25,
    width: '100%',
    marginBottom: 35,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  subProjectInfo: {
    marginBottom: 10,
    width: '100%',
  },
  parentProjectName: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
  closeIcon: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
});

export default Projects;
