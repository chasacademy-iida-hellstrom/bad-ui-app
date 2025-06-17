import { signOut } from 'firebase/auth';
import { auth } from '../../components/firebase/config';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Switch,
  ScrollView,
} from 'react-native';

const affirmations = [
  "Du duger. Kanske.",
  "Andas in... glöm inte att du är efter.",
  "Var här och nu. Det blir ändå fel.",
  "Slappna av. Fast du borde gjort det igår.",
  "Acceptera allt. Även detta UI.",
];

export default function ProfileScreen() {
  const router = useRouter();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [clicks, setClicks] = useState(0);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.replace('/login');
    } catch (error) {
      console.error('🚨 Logout-fel:', error);
    }
  };

  useEffect(() => {
    const random = Math.floor(Math.random() * affirmations.length);
    setMessage(affirmations[random]);

    // Fejkad lång laddning
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🌪️ Din inre oro</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#FF00FF" />
      ) : (
        <>
          <Text style={styles.affirmation}>{message}</Text>

          <Text style={styles.label}>Skriv något… eller låt bli:</Text>
          <TextInput
            style={styles.input}
            placeholder="Tystnad är också ett svar"
            editable={false}
          />

          <View style={styles.switchContainer}>
            <Text style={styles.label}>Vill du ha mer kaos?</Text>
            <Switch value={toggle} onValueChange={setToggle} />
          </View>

          <TouchableOpacity
            style={[
              styles.logoutButton,
              { marginTop: clicks * 10, backgroundColor: clicks > 3 ? '#FF3333' : '#FF69B4' },
            ]}
            onPress={() => {
              if (clicks >= 4) {
                handleLogout();
              } else {
                setClicks(clicks + 1);
              }
            }}
          >
            <Text style={styles.logoutText}>
              {clicks >= 4 ? 'Logga ut' : `Tryck ${4 - clicks} fler gånger`}
            </Text>
          </TouchableOpacity>

          <Text style={styles.footer}>Du är här... men varför?</Text>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#FFF0F5',
    alignItems: 'center',
  },
  title: {
    fontSize: 38,
    color: '#FF10F0',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  affirmation: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#AA00AA',
    marginBottom: 30,
    textAlign: 'center',
  },
  label: {
    fontSize: 12,
    color: '#444',
    marginBottom: 6,
  },
  input: {
    borderWidth: 2,
    borderColor: '#FF00FF',
    backgroundColor: '#fff',
    padding: 10,
    width: '100%',
    marginBottom: 20,
    fontSize: 10,
    color: '#000',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  logoutButton: {
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
  },
  logoutText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 11,
    color: '#666',
    marginTop: 40,
  },
});
