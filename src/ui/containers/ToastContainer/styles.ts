import Typography from 'ui/components/atoms/Typography';
import Icon from 'ui/components/atoms/Icon';
import { Spacing } from 'ui/theme';
import { colors } from 'ui/theme/colors';
import styled from 'styled-components/native';
import { ToastMessage } from 'contexts/Toast';

const getColor = (type: ToastMessage['type']) => {
  switch (type) {
    case 'error':
      return 'danger';
    default:
      return type;
  }
};

export const Container = styled.SafeAreaView`
  position: absolute;
  z-index: 1000;
  width: 100%;
  top: 0px;
  flex: 1;
  align-items: center;
`;

export const Content = styled.View<{ type: ToastMessage['type'] }>`
  flex: 1;
  border-radius: ${Spacing.SCALE_8}px;
  width: 95%;
  background-color: ${({ type }) => colors[getColor(type)]};
  flex-direction: row;
  align-items: center;
  padding: ${Spacing.SCALE_12}px;
  margin-top: ${Spacing.SCALE_12}px;
`;

export const ToastIcon = styled(Icon).attrs({
  size: 20,
  color: 'white',
})`
  margin-right: ${Spacing.SCALE_4}px;
`;

export const Message = styled(Typography).attrs({
  color: 'white',
  variant: 'body2',
})`
  flex: 1;
`;
