import React from 'react';
import Loading from 'ui/components/atoms/Loading';
import SafeArea from 'ui/containers/SafeArea';
import { Container, Title, Description } from './styles';

interface LoadingTemplateProps {
  title?: string;
  description?: string;
}

const LoadingTemplate = ({
  title = 'Carregando...',
  description = 'Estamos buscando as informações climáticas com base na sua localização',
}: LoadingTemplateProps) => {
  return (
    <SafeArea>
      <Container>
        <Loading flex1={false} />
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Container>
    </SafeArea>
  );
};

export default LoadingTemplate;
