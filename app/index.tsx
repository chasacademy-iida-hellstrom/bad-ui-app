import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../components/firebase/config';
import { useRouter } from 'expo-router';
import { View, Text, ActivityIndicator } from 'react-native';
export default function EntryPoint() {
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(':white_check_mark: Inloggad:', user.email);
        router.replace('/onboarding');
      } else {
        console.log(':no_entry:️ Inte inloggad');
        router.replace('/login');
      }
    });
    return unsubscribe;
  }, [router]);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
      <Text>Laddar...</Text>
    </View>
  );
}






