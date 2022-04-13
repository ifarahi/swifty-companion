import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useAuthContext } from '../providers/auth-provider';
import Button from '../components/Button';
import { colors } from '../styles';
import Loader from '../components/Loader';
import Logo from '../components/Logo';

const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { auth } = useAuthContext();

  const handleLogin = async () => {
    setIsLoading(true);
    auth();
  };

  if (isLoading) return <Loader />;

  return (
    <SafeAreaView style={styles.container}>
      <Logo style={styles.logo} />
      <Button onPress={handleLogin} title="login" style={styles.button} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    marginTop: 150,
    marginBottom: 200,
  },
  button: {},
});

export default Login;
