import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../components/firebase/config';
import { useRouter, Stack } from 'expo-router';
import BadInput from '../components/BadInput';
import BadButton from '../components/BadButton';
export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleLogin = async () => {
  Alert.alert('OK', 'försök logga in', [{ text: 'ja' }]);
  setLoading(true);
  setTimeout(async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      
      const userEmail = userCredential.user.email;
      setMessage(`✅ Inloggad som ${userEmail}`);
      
      Alert.alert('Välkommen tillbaka', `Du är nog inloggad nu som ${userEmail}.`);
      router.replace('/onboarding');
    } catch (error: any) {
      setMessage(':x: Fel: ' + (error.message || '...något gick snett.'));
    } finally {
      setLoading(false);
    }
  }, 4000); 
};

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Text style={styles.title}>VÄLKOMMEN!!!!!!!!</Text>
       
        <BadInput
          placeholder="mejlish"
          value={email}
          onChangeText={setEmail}
          variant="ghost"
        />
        <BadInput
          placeholder="l0s3n?"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          variant="error"
        />
        {loading ? (
          <>
            <Text style={{ color: '#888', marginBottom: 10 }}>Bearbetar...</Text>
            <ActivityIndicator size="large" color="#999" />
          </>
        ) : (
          <BadButton title="Log in" onPress={handleLogin} variant="logIn" />
        )}
        {message !== '' && <Text style={styles.message}>{message}</Text>}
        <TouchableOpacity onPress={() => router.push('/register')} style={styles.registerLink}>
          <Text style={styles.registerText}>Regga dig</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF0F0',
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 42,
    color: '#AA6666',
    marginBottom: 30,
    fontStyle: 'italic',
  },
  message: {
    marginTop: 15,
    color: '#CC0000',
    textAlign: 'center',
  },
  registerLink: {
    marginTop: 30,
  },
  registerText: {
    color: '#6666CC',
    textDecorationLine: 'underline',
    fontSize: 13,
  },
});









