import React from 'react';
import { View, ViewProps, Text, StyleSheet } from 'react-native';
import { colors } from '../../styles';
import ProgressBar from '../ProgressBar';

interface SkillProps extends ViewProps {
  name: string;
  level: number;
  maxLevel: number;
}

const Skill: React.FC<SkillProps> = ({
  name,
  level,
  maxLevel,
  style,
  ...props
}) => {
  const percentage = (level * 100) / maxLevel;

  return (
    <View style={[styles.container, style]} {...props}>
      <View style={styles.description}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{level.toFixed(2)}</Text>
      </View>
      <View style={styles.progress}>
        <ProgressBar
          style={{ width: '80%' }}
          percentage={percentage.toFixed(0)}
        />
        <Text style={styles.text}>{`${
          percentage < 100 ? percentage.toFixed(2) : percentage.toFixed(0)
        }%`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  description: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  progress: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: colors.white,
  },
});

export default Skill;
