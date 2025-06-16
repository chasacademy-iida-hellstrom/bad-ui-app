// @ts-ignore
import Onboarding from 'react-native-onboarding-swiper';
import { useRouter } from 'expo-router';
import { Image, StyleSheet } from 'react-native';

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <Onboarding
      containerStyles={styles.onboardingContainer} // styr hela layouten
      bottomBarHighlight={false}                    // gör baren lite plattare
      onSkip={() => router.replace('/(tabs)')}
      onDone={() => router.replace('/(tabs)')}
      pages={[
        {
          backgroundColor: '#FDEB93',
          image: (
            <Image
              source={require('../assets/images/zen2.png')}
              style={styles.image}
              resizeMode="contain"
            />
          ),
          title: '🧘‍♀️ Andas in...',
          subtitle: '...och håll andan tills appen laddat klart...',
          imageContainerStyles: { marginTop: -70 },
        },
        {
          backgroundColor: '#E9BCBE',
          image: (
            <Image
              source={require('../assets/images/zen1.png')}
              style={styles.image}
              resizeMode="contain"
            />
          ),
          title: '🌕 Nu är du nästan närvarande',
          subtitle: '( varning: Vet du vad du ger dig in på? Det kan vara jobbigt att deala med sina demoner)',
          imageContainerStyles: { marginTop: -70 },
        },
        {
          backgroundColor: '#A6E4D0',
          image: (
            <Image
              source={require('../assets/images/zen3.png')}
              style={styles.image}
              resizeMode="contain"
            />
          ),
          title: '🌀ÄR DU REDO?!',
          subtitle: 'Tryck på "V". (Eller sitt kvar- tiden är bara en illusion.) ',
          imageContainerStyles: { marginTop: -70 },
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  onboardingContainer: {
    paddingTop: 10,          // Mindre top-padding än standard
    justifyContent: 'flex-start', 
  },
  image: {
    width: 350,
    height: 350,
  },
});
