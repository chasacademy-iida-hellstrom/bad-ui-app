import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../components/firebase/config';
export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleRegister = async () => {
    try {
      console.log('Försöker registrera med:', email); // :point_left: Lägg till
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('Registreringen lyckades!'); // :point_left: Lägg till
      Alert.alert('Registrerad!', 'Du är nu registrerad.');
    } catch (error: any) {
      console.error('Fel vid registrering:', error); // :point_left: Lägg till
      Alert.alert('Fel', error.message);
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
      <Text style={{ color: 'black', fontSize: 22, marginBottom: 20 }}>
        Registrera dig
      </Text>
      <TextInput
        placeholder="E-post"
        placeholderTextColor="gray"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          padding: 8,
          marginBottom: 12,
          borderRadius: 4,
          backgroundColor: 'white',
          color: 'black',
        }}
      />
      <TextInput
        placeholder="Lösenord"
        placeholderTextColor="gray"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          padding: 8,
          marginBottom: 12,
          borderRadius: 4,
          backgroundColor: 'white',
          color: 'black',
        }}
      />
      <Button title="Registrera" onPress={handleRegister} />
    </View>
  );
}










