import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../components/firebase/config';
import { useRouter, Stack } from 'expo-router'; // ✅ glöm inte importera Stack
import BadInput from '../components/BadInput';
import BadButton from '../components/BadButton';

export default function RegisterScreen() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async () => {
    Alert.alert('OBS!', 'Nu registrerar vi dig nog', [{ text: 'Jag går med på allt' }]);
    setLoading(true);

    setTimeout(async () => {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        Alert.alert('Grattis, du är troligtvis reggad!');
        router.replace('/login');
      } catch (error: any) {
        Alert.alert('Fel!', error.message || 'Något gick väldigt, väldigt snett.');
      } finally {
        setLoading(false);
      }
    }, 5000);
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Text style={styles.title}>Skapa konto?</Text>

        {/* Medvetet bakvänd ordning */}
        <BadInput
          placeholder="lsnrd (min 6?)"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <BadInput
          placeholder="epst adr."
          value={email}
          onChangeText={setEmail}
        />

        {loading ? (
          <>
            <Text style={{ color: '#888', marginBottom: 10 }}>Vi jobbar på det.</Text>
            <ActivityIndicator size="small" color="#999" />
          </>
        ) : (
          <BadButton title="Knapp" onPress={handleRegister} />
        )}

        <Text style={styles.warning}>
          ⚠️ Ditt lösenord kanske sparas för all framtid i en hemlig databas, och vår excelfil.
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFCC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    color: '#CCCCCC',
    marginBottom: 30,
  },
  warning: {
    marginTop: 20,
    color: 'red',
    fontStyle: 'italic',
    fontSize: 12,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});
