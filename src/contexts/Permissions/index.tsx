import React, { createContext } from 'react';
import { LocationPermissionResponse } from 'expo-location';
import usePermissions from 'hooks/usePermissions';
import IllustrationPageTemplate from 'ui/components/templates/IllustrationPageTemplate';

interface PermissionsContextData {
  location: LocationPermissionResponse;
}

const PermissionsContext = createContext<PermissionsContextData>(
  {} as PermissionsContextData
);

export const withPermissionsContext = WrappedComponent => {
  const WrapperComponent = props => {
    const permissions = usePermissions();

    if (!permissions.location || !permissions.location.granted) {
      return (
        <IllustrationPageTemplate
          title='Localização'
          illustration='location'
          description='Para utilizar o aplicativo é necessário permitir que o AppWeather tenha acesso a sua localização.'
          button={{
            onPress: permissions.requestLocationPermission,
            label: 'Permitir',
          }}
        />
      );
    }

    return (
      <PermissionsContext.Provider value={permissions}>
        <WrappedComponent {...props} />
      </PermissionsContext.Provider>
    );
  };
  return WrapperComponent;
};

export default PermissionsContext;
