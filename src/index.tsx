import React from 'react';

import useLoadFonts from 'hooks/useLoadFonts';

import HomeScreen from './screens/Home';

export default () => {
  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) return null;

  return <HomeScreen />;
};
