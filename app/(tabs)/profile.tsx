import { signOut } from 'firebase/auth';
import { auth } from '../../components/firebase/config'; // :white_check_mark: kontrollera rätt sökväg
import { useRouter } from 'expo-router';
import { View, Text, Button, StyleSheet } from 'react-native';
export default function ProfileScreen() {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.replace('/login');
    } catch (error) {
      console.error(':rotating_light: Logout-fel:', error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>:bust_in_silhouette: Din profil</Text>
      <Button title="Logga ut" onPress={handleLogout} color="#FF3333" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});






