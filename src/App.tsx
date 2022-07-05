import React from 'react';
import { StatusBar } from 'expo-status-bar';
import useLoadFonts from 'hooks/useLoadFonts';
import { withPermissionsContext } from 'contexts/Permissions';
import { withWeatherContext } from 'contexts/Weather';
import HomeScreen from './screens/Home';

export const App = () => {
  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) return null;

  return (
    <>
      <StatusBar style='light' />
      <HomeScreen />
    </>
  );
};

export default withPermissionsContext(withWeatherContext(App));
