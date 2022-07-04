import styled from 'styled-components/native';

export const Container = styled.View<{ flex1: boolean }>`
  ${({ flex1 }) => (flex1 ? 'flex: 1;' : '')}
  justify-content: center;
  align-items: center;
`;
