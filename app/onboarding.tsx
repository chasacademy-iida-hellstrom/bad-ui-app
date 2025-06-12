// @ts-ignore
import Onboarding from 'react-native-onboarding-swiper';
import { useRouter } from 'expo-router';
import { Image } from 'react-native';

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <Onboarding
      onSkip={() => router.replace('/home')}
      onDone={() => router.replace('/home')}
      pages={[
        {
          backgroundColor: '#fdeb93',
          /*image: <Image source={require('../assets/onboarding1.png')} style={{ width: 200, height: 200 }} />,*/
          title: 'Hej!',
          subtitle: 'Välkommen till vår lilla app.',
        },
        {
          backgroundColor: '#e9bcbe',
          /*image: <Image source={require('../assets/onboarding2.png')} style={{ width: 200, height: 200 }} />,*/
          title: 'Så här funkar det',
          subtitle: 'Du loggar in och får en liten belöning!',
        },
        {
          backgroundColor: '#a6e4d0',
          /*image: <Image source={require('../assets/onboarding3.png')} style={{ width: 200, height: 200 }} />,*/
          title: 'Klara, färdiga, gå!',
          subtitle: 'Tryck på klar för att starta.',
        },
      ]}
    />
  );
}
