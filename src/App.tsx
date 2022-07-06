import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { withPermissionsContext } from 'contexts/Permissions';
import { withWeatherContext } from 'contexts/Weather';
import HomeScreen from './screens/Home';

export const App = () => {
  return (
    <>
      <StatusBar style='light' />
      <HomeScreen />
    </>
  );
};

export default withPermissionsContext(withWeatherContext(App));
