import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../components/firebase/config';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      console.log('Försöker logga in med:', email);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Inloggning lyckades:', userCredential.user);
      setMessage('✅ Inloggning lyckades!');
      router.replace('/home');
    } catch (error: any) {
      console.error('Fel vid inloggning:', error);
      setMessage('❌ Fel: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logga in</Text>
      <TextInput
        placeholder="E-post"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        placeholder="Lösenord"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Logga in" onPress={handleLogin} />
      {message !== '' && <Text style={styles.message}>{message}</Text>}

      <TouchableOpacity onPress={() => router.push('/register')} style={styles.registerLink}>
        <Text style={styles.registerText}>Har du inget konto? Registrera dig här</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    marginTop: 60,
    flex: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 12,
    borderRadius: 5,
  },
  message: {
    marginTop: 10,
    color: 'red',
  },
  registerLink: {
    marginTop: 20,
    alignItems: 'center',
  },
  registerText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
