import { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
export default function UltraZenScreen() {
  const [countdown, setCountdown] = useState(5);
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prev => (prev === 1 ? 5 : prev - 1)); // startar om vid 1
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>:tornado: UltraZEN:tm: - Maximal Avkoppling</Text>
      <Text style={styles.subtext}>Stirra på texten nedan tills du glömmer varför du kom hit:</Text>
      <Text style={styles.blinking}>ANDAS IN... NEJ UT... NEJ IN... NU!</Text>
      <Text style={styles.timer}>Nedräkning: {countdown}</Text>
      <Button
        title="Stäng av kaos"
        onPress={() => alert('Tyvärr. Du är fast här nu.')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF00FF',
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: '#FFF000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtext: {
    color: '#000000',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  blinking: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF2222',
    marginBottom: 30,
  },
  timer: {
    fontSize: 30,
    fontWeight: '900',
    color: '#00FFFF',
    marginBottom: 40,
  },
});






