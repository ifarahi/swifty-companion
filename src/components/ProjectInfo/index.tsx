import React from 'react';
import { View, ViewProps, Text, Image, StyleSheet } from 'react-native';
import { colors } from '../../styles/index';

import checkIcon from '../../icons/checkIcon.png';
import uncheckIcon from '../../icons/uncheckIcon.png';

interface ProjectInfoProps extends ViewProps {
  name: string;
  percentage: number | null;
  validated: boolean | null;
  isMarked: boolean;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({
  name,
  percentage,
  validated,
  isMarked,
  style,
  ...props
}) => {
  return (
    <View style={[styles.container, style]} {...props}>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.details}>
        <Text style={styles.text}>{`${percentage}%`}</Text>
        {isMarked && (
          <Image
            style={styles.icon}
            source={validated ? checkIcon : uncheckIcon}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 45,
    borderRadius: 25,
    backgroundColor: colors.darkGrey,
    paddingHorizontal: 20,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '400',
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '60%',
  },
  icon: {
    height: 16,
    width: 16,
    marginLeft: 10,
  },
});

export default ProjectInfo;
