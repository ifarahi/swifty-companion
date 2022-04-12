import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import { useAuthContext } from '../providers/auth-provider';
import Button from '../components/Button';
import { colors } from '../styles';
import Loader from '../components/Loader';

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
      <View style={styles.heading}>
        <Text style={styles.headingPrimary}>
          Swifty<Text style={styles.headingSecondary}>Companion</Text>
        </Text>
      </View>
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
  heading: {
    marginTop: 150,
    marginBottom: 200,
  },
  headingPrimary: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },
  headingSecondary: { fontSize: 24, fontWeight: '300', color: colors.white },
  button: {},
});

export default Login;
