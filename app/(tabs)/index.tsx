import { View, Text, StyleSheet } from 'react-native';
export default function HomeTabScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>:person_in_lotus_position: Dagens tanke</Text>
      <Text style={styles.message}>Du behöver inte fixa allt idag.</Text>
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
    fontWeight: 'bold',
    marginBottom: 12,
  },
  message: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#444',
    textAlign: 'center',
  },
});









