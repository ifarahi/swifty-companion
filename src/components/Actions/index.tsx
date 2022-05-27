import React from 'react';
import {
  View,
  ViewProps,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useAuthContext } from '../../providers/auth-provider';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

import logoutIcon from '../../icons/logoutIcon.png';
import backIcon from '../../icons/backIcon.png';

interface AcrtionsProps extends ViewProps {
  navigation?: NativeStackNavigationProp<RootStackParamList, any, undefined>;
  enablePrevious?: boolean;
}

const Actions: React.FC<AcrtionsProps> = ({
  navigation,
  enablePrevious,
  style,
}) => {
  const { logout } = useAuthContext();

  const onLogout = async () => {
    await logout();
  };

  const navToSearch = () => navigation?.navigate('Search');

  return (
    <View
      style={[
        styles.container,
        { justifyContent: enablePrevious ? 'space-between' : 'flex-end' },
        style,
      ]}>
      {enablePrevious && (
        <TouchableOpacity onPress={navToSearch}>
          <Image source={backIcon} style={styles.backIcon} />
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={onLogout}>
        <Image source={logoutIcon} style={styles.logout} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    top: 15,
    paddingHorizontal: 10,
  },
  logout: {
    width: 35,
    height: 35,
  },
  backIcon: {
    width: 32,
    height: 32,
  },
});

export default Actions;
