import React from 'react';
import useToast from 'hooks/useToast';
import { Container, Content, ToastIcon, Message } from './styles';
import { ToastMessage } from 'contexts/Toast';
import { IconName } from 'ui/components/atoms/Icon/types';

const ToastContainer = () => {
  const { messages } = useToast();

  const getIcon = (type: ToastMessage['type']): IconName => {
    switch (type) {
      case 'success':
        return 'check-circle';
      default:
        return 'x-circle-outlined';
    }
  };

  return (
    <Container>
      {messages.map(({ id, content, type }) => (
        <Content key={id} type={type}>
          <ToastIcon name={getIcon(type)} />
          <Message>{content}</Message>
        </Content>
      ))}
    </Container>
  );
};

export default ToastContainer;
