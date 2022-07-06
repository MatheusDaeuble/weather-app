import React from 'react';
import Loading from 'ui/components/atoms/Loading';
import SafeArea from 'ui/containers/SafeArea';
import { Container } from './styles';

const LoadingTemplate = () => {
  return (
    <SafeArea color='primary'>
      <Container>
        <Loading color='white' />
      </Container>
    </SafeArea>
  );
};

export default LoadingTemplate;
