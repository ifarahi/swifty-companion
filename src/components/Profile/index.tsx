import React from 'react';
import { View, Text, StyleSheet, ViewProps } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

import { colors } from '../../styles';

interface ProfileProps extends ViewProps {
  login: string;
  displayName: string;
  wallet: number | string;
  email: string;
  level: number;
}

const Profile: React.FC<ProfileProps> = ({
  displayName,
  login,
  email,
  wallet,
  level,
}) => {
  const levelPercentage = (level / 24) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <View style={styles.infoElement}>
          <Text style={styles.label}>Login: </Text>
          <Text style={styles.text}>{login}</Text>
        </View>
        <View style={styles.infoElement}>
          <Text style={styles.label}>name: </Text>
          <Text style={styles.text}>{displayName}</Text>
        </View>
        <View style={styles.infoElement}>
          <Text style={styles.label}>email: </Text>
          <Text style={styles.text}>{email}</Text>
        </View>
        <View style={styles.infoElement}>
          <Text style={styles.label}>wallet</Text>
          <Text style={styles.text}>{wallet} ₳</Text>
        </View>
      </View>
      <View style={styles.levelContainer}>
        <ProgressCircle
          percent={Number(levelPercentage)}
          radius={80}
          borderWidth={9}
          color={colors.primary}
          shadowColor="#999"
          bgColor={colors.darkGrey}>
          <Text style={styles.level}>level {level}</Text>
        </ProgressCircle>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    padding: 16,
  },
  info: {
    marginBottom: 20,
    width: '69%',
    alignSelf: 'center',
  },
  infoElement: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
    marginBottom: 15,
    alignSelf: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.white,
    marginBottom: 15,
    alignSelf: 'center',
  },
  levelContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  level: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.white,
  },
});

export default Profile;
