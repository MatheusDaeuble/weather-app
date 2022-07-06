import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { withPermissionsContext } from 'contexts/Permissions';
import { withWeatherContext } from 'contexts/Weather';
import HomeScreen from './screens/Home';
import { focusManager } from 'react-query';
import { AppState, AppStateStatus, Platform } from 'react-native';

export const App = () => {
  const onAppStateChange = (status: AppStateStatus) => {
    if (Platform.OS !== 'web') focusManager.setFocused(status === 'active');
  };

  useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange);
    return () => subscription.remove();
  }, []);

  return (
    <>
      <StatusBar style='light' />
      <HomeScreen />
    </>
  );
};

export default withPermissionsContext(withWeatherContext(App));
