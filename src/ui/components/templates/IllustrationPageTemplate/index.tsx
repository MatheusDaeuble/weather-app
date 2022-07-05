import React from 'react';
import SafeArea from 'ui/containers/SafeArea';
import Illustration from 'ui/components/atoms/Illustration';
import { WINDOW_WIDTH } from 'util/dimensions';
import Button, { ButtonProps } from 'ui/components/atoms/Button';
import { IllustrationName } from 'ui/components/atoms/Illustration/types';
import { Container, Title, Description, Content } from './styles';

interface IllustrationPageTemplateProps {
  title?: string;
  description?: string;
  illustration?: IllustrationName;
  button?: ButtonProps;
}

const IllustrationPageTemplate = ({
  title = '',
  description = '',
  illustration,
  button,
}: IllustrationPageTemplateProps) => {
  return (
    <SafeArea>
      <Container>
        <Content>
          {!!illustration && (
            <Illustration name={illustration} width={WINDOW_WIDTH * 0.6} />
          )}
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Content>
        {!!button && <Button {...button} />}
      </Container>
    </SafeArea>
  );
};

export default IllustrationPageTemplate;
