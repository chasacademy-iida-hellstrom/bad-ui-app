import { signOut } from 'firebase/auth';
import { auth } from '../../components/firebase/config';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Switch,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';

const affirmations = [
  'Du duger. Kanske inte för alla, men det är ok.',
  'Andas in... glöm inte att du är efter.',
  'Var här och nu. Det blir ändå fel ibland dock.',
  'Slappna av. Fast du borde också gjort det igår.',
  'Acceptera allt. Även detta.',
];

const emojis = ['🤡', '🐸', '🫠', '💥', '🌀', '😵‍💫', '🤯', '🙃', '😡', '😴'];

export default function ProfileScreen() {
  const router = useRouter();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [aboutText, setAboutText] = useState('');
  const [profilePic, setProfilePic] = useState('https://placekitten.com/200/200');

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.replace('/login');
    } catch (error) {
      console.error(':rotating_light: Logout-fel:', error);
    }
  };

  useEffect(() => {
    const random = Math.floor(Math.random() * affirmations.length);
    setMessage(affirmations[random]);

    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ScrollView
      contentContainerStyle={[styles.container, { paddingTop: 120, paddingBottom: 120 }]}
    >
      <Text style={styles.title}>🌈*~~ DiN MindFUlneSspRofil ~~*</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#00FFFF" />
      ) : (
        <>
          <TouchableOpacity
            onPress={() => {
              const weirdCats = [
                'https://placekitten.com/200/200',
                'https://placekitten.com/300/100',
                'https://placekitten.com/201/199',
              ];
              setProfilePic(weirdCats[Math.floor(Math.random() * weirdCats.length)]);
            }}
          >
            <Image source={{ uri: profilePic }} style={styles.avatar} />
            <Text style={styles.editPicText}>Tryck här?</Text>
          </TouchableOpacity>

          <Text style={styles.affirmation}>{message}</Text>

          <Text style={styles.label}>Vad tänker du på idag:</Text>
          <TextInput
            style={styles.input}
            placeholder="Skrivhär"
            value={aboutText}
            multiline
            maxLength={60}
            onChangeText={(text) => {
              let newText = '';
              for (let i = 0; i < text.length; i++) {
                newText += text[i];
                if (Math.random() < 0.4) {
                  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
                  newText += randomEmoji;
                }
              }
              setAboutText(newText);
            }}
          />

          <View style={styles.switchContainer}>
            <Text style={styles.label}>Vill du ha mer zen?</Text>
            <Switch
              value={toggle}
              onValueChange={setToggle}
              trackColor={{ false: '#000', true: '#FFFF00' }}
            />
          </View>

          <TouchableOpacity
            style={[
              styles.logoutButton,
              {
                backgroundColor: clicks > 3 ? '#00FF00' : '#FF00FF',
                transform: [{ rotate: `${clicks * 5}deg` }],
              },
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
              {clicks >= 4 ? 'LOGGA UT!' : `Tryck ${4 - clicks} fler gånger`}
            </Text>
          </TouchableOpacity>

          <Text style={styles.footer}>🫨 Du är här.. känner du dig ok?</Text>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    paddingHorizontal: 40,
    backgroundColor: '#FFFD00',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    color: '#00FF00',
    backgroundColor: '#FF00FF',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 10,
    borderWidth: 6,
    borderColor: '#00FFFF',
    marginBottom: 10,
    transform: [{ rotate: '-3deg' }],
  },
  editPicText: {
    fontSize: 14,
    color: '#FF00FF',
    fontWeight: '900',
    marginBottom: 30,
    backgroundColor: '#00FF00',
    padding: 4,
    borderRadius: 4,
  },
  affirmation: {
    fontSize: 18,
    color: '#0000FF',
    fontWeight: 'bold',
    backgroundColor: '#FFCCCC',
    padding: 10,
    textAlign: 'center',
    marginBottom: 20,
    transform: [{ rotate: '1deg' }],
  },
  label: {
    fontSize: 16,
    color: '#FF0000',
    backgroundColor: '#00FFFF',
    padding: 4,
    marginBottom: 6,
  },
  input: {
    borderWidth: 3,
    borderColor: '#000',
    backgroundColor: '#FFA500',
    color: '#550000',
    padding: 20,
    width: '100%',
    fontSize: 22,
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: 5,
    transform: [{ rotate: '2deg' }],
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  logoutButton: {
    padding: 15,
    borderRadius: 30,
    marginBottom: 30,
  },
  logoutText: {
    fontSize: 20,
    color: '#FFFFFF',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  footer: {
    fontSize: 18,
    color: '#222',
    marginTop: 40,
    backgroundColor: '#FFDEAD',
    padding: 8,
  },
});
