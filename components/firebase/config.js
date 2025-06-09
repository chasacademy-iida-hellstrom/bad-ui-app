import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAselE3Ne4pxfUWJ_pBXYfkCg7hluwbES0",
  authDomain: "bad-ui-app-emiida.firebaseapp.com",
  projectId: "bad-ui-app-emiida",
  storageBucket: "bad-ui-app-emiida.firebasestorage.app",
  messagingSenderId: "837114914146",
  appId: "1:837114914146:web:106803e21095d7b64b783b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth};