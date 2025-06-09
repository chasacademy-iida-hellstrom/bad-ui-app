// components/firebase/config.js
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyAselE3Ne4pxfUWJ_pBXYfkCg7hluwbES0",
  authDomain: "bad-ui-app-emiida.firebaseapp.com",
  projectId: "bad-ui-app-emiida",
  storageBucket: "bad-ui-app-emiida.appspot.com",
  messagingSenderId: "837114914146",
  appId: "1:837114914146:web:106803e21095d7b64b783b"
};

// Initiera appen
const app = initializeApp(firebaseConfig);

// ✅ KORREKT sätt för Expo Go-mobil:
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { firebaseConfig, app, auth };
