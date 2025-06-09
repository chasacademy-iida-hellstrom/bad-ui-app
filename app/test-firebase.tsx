import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { auth } from '../components/firebase/config';

export default function TestFirebase() {
  useEffect(() => {
    console.log("Auth from Firebase:", auth);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Firebase fungerar 🎉</Text>
    </View>
  );
}
