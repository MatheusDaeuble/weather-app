import { useEffect, useMemo } from 'react';
import { useForegroundPermissions } from 'expo-location';
import { AppState } from 'react-native';
import * as IL from 'expo-intent-launcher';
import { Linking } from 'react-native';
import { isIOS } from 'util/platform';

const usePermissions = () => {
  const [location, requestLocationPermission, checkLocationPermission] =
    useForegroundPermissions();
  const loaded = useMemo(() => !location, [location]);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', state => {
      if (state === 'active') checkLocationPermission();
    });

    return () => subscription.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openAppSettings = () => {
    if (isIOS) Linking.openURL('app-settings:');
    else
      IL.startActivityAsync(IL.ActivityAction.APPLICATION_DETAILS_SETTINGS, {
        data: 'package:com.weatherapp',
      });
  };

  const handleRequestLocationPermission = () => {
    if (location) {
      location.canAskAgain ? requestLocationPermission() : openAppSettings();
    }
  };

  return {
    location,
    loaded,
    requestLocationPermission: handleRequestLocationPermission,
    openAppSettings,
  };
};

export default usePermissions;
