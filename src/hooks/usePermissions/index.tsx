import { useMemo } from 'react';
import { useForegroundPermissions } from 'expo-location';

const usePermissions = () => {
  const [location, requestLocationPermission] = useForegroundPermissions();

  const loaded = useMemo(() => !location, [location]);

  return { location, loaded, requestLocationPermission };
};

export default usePermissions;
