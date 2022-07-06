import { ToastProvider } from 'contexts/Toast';
import useLoadFonts from 'hooks/useLoadFonts';
import React from 'react';
import { QueryClientProvider } from 'react-query';

import queryClient from 'services/shared/queryClient';
import LoadingTemplate from 'ui/components/templates/LoadingTemplate';
import ToastContainer from 'ui/containers/ToastContainer';

import App from './App';

export default () => {
  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) return <LoadingTemplate />;

  return (
    <ToastProvider>
      <QueryClientProvider client={queryClient}>
        <App />
        <ToastContainer />
      </QueryClientProvider>
    </ToastProvider>
  );
};
