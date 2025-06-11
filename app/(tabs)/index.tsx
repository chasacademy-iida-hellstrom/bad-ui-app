// app/index.tsx
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../components/firebase/config';
import { useRouter } from 'expo-router';
import { View, Text, ActivityIndicator } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('✅ Användaren är inloggad:', user.email);
        router.replace('/home');
      } else {
        console.log('⛔️ Inte inloggad');
        router.replace('/login');
      }
    });

    return unsubscribe;
  });

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
      <Text>Laddar...</Text>
    </View>
  );
}
