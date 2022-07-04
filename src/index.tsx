import React from 'react';
import { QueryClientProvider } from 'react-query';

import useLoadFonts from 'hooks/useLoadFonts';
import queryClient from 'services/shared/queryClient';

import HomeScreen from './screens/Home';

export default () => {
  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <HomeScreen />
    </QueryClientProvider>
  );
};
