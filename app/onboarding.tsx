// @ts-ignore
import Onboarding from 'react-native-onboarding-swiper';
import { useRouter } from 'expo-router';
import { Image } from 'react-native';
export default function OnboardingScreen() {
  const router = useRouter();
  return (
    <Onboarding
      onSkip={() => router.replace('/(tabs)')}
      onDone={() => router.replace('/(tabs)')}
      pages={[
        {
          backgroundColor: '#FDEB93',
          title: 'Hej!',
          subtitle: 'Välkommen till vår lilla app.',
        },
        {
          backgroundColor: '#E9BCBE',
          title: 'Så här funkar det',
          subtitle: 'Du loggar in och får en liten belöning!',
        },
        {
          backgroundColor: '#A6E4D0',
          title: 'Klara, färdiga, gå!',
          subtitle: 'Tryck på klar för att starta.',
        },
      ]}
    />
  );
}






