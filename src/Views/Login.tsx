import React, { useState } from 'react';
import { Text, SafeAreaView, Button } from 'react-native';
import { useAuthContext } from '../Providers/auth-provider';

const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { auth } = useAuthContext();

  const handleLogin = async () => {
    setIsLoading(true);
    auth();
  };

  if (isLoading) return <Text>...Loading</Text>;

  return (
    <SafeAreaView>
      <Button onPress={handleLogin} title="login" />
    </SafeAreaView>
  );
};

export default Login;
