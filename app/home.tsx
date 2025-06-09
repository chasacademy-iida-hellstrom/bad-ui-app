

import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';
import { firebaseConfig } from '../components/firebase/config';

const app = initializeApp(firebaseConfig); 
const auth = getAuth(app); 

export default function Home() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.replace('/login');
    } catch (error) {
      console.error('Fel vid utloggning:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Välkommen hem!</Text>
      <Button title="Logga ut" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});
