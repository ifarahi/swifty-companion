import React from 'react';
import { View, Text } from 'react-native';
import { useAuthContext } from '../Providers';

const Login: React.FC = () => {
  const auth = useAuthContext();

  return (
    <View>
      <Text>{auth.accessToken}</Text>
    </View>
  );
};

export default Login;
