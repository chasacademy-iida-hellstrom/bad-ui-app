import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import Emoji from 'react-native-emoji';
const { width, height } = Dimensions.get('window');
const NUMBER_OF_FLOWERS = 15;
function FallingFlower({ startX, delay }: { startX: number; delay: number }) {
  const fallAnim = useRef(new Animated.Value(-50)).current;
  useEffect(() => {
    const loop = () => {
      fallAnim.setValue(-50);
      Animated.timing(fallAnim, {
        toValue: height + 50,
        duration: 6000 + Math.random() * 3000,
        delay,
        useNativeDriver: true,
      }).start(() => loop());
    };
    loop();
  }, [fallAnim, delay]);
  return (
    <Animated.View
      style={{
        position: 'absolute',
        top: 0,
        left: startX,
        transform: [{ translateY: fallAnim }],
        zIndex: 1,
      }}
    >
      <Emoji name="cherry_blossom" style={{ fontSize: 28 }} />
    </Animated.View>
  );
}
export default function HomeTabScreen() {
  const pulseAnimTitle = useRef(new Animated.Value(1)).current;
  const pulseAnimNote = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnimTitle, {
          toValue: 0.7,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnimTitle, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnimNote, {
          toValue: 0.6,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnimNote, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [pulseAnimTitle, pulseAnimNote]);
  return (
    <View style={styles.container}>
      
      {[...Array(NUMBER_OF_FLOWERS)].map((_, i) => (
        <FallingFlower
          key={i}
          startX={Math.random() * width}
          delay={Math.random() * 5000}
        />
      ))}
      <Animated.Text
        style={[
          styles.title,
          {
            opacity: pulseAnimTitle,
            transform: [
              {
                scale: pulseAnimTitle.interpolate({
                  inputRange: [0.7, 1],
                  outputRange: [0.95, 1],
                }),
              },
            ],
          },
        ]}
      >
        <Emoji name="person_in_lotus_position" style={{ fontSize: 28 }} />
        <Text> Dagens tanke</Text>
      </Animated.Text>
      <Text style={styles.message}>
        Ta en paus idag. Det är okej att bara vara.
      </Text>
      <Animated.Text
        style={[
          styles.note,
          {
            opacity: pulseAnimNote,
            transform: [
              {
                scale: pulseAnimNote.interpolate({
                  inputRange: [0.6, 1],
                  outputRange: [0.9, 1],
                }),
              },
            ],
          },
        ]}
      >
        Att göra mindre kan vara mer.
      </Animated.Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#39FF14',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: '900',
    color: '#222',
    marginBottom: 16,
    flexDirection: 'row',
  },
  message: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#222',
    textAlign: 'center',
    marginBottom: 12,
  },
  note: {
    fontSize: 18,
    color: '#FF44CC',
    textAlign: 'center',
    marginTop: 8,
    fontWeight: 'bold',
  },
});






