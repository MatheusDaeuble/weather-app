import styled from 'styled-components/native';
import { TypographyAttributes as Typography } from 'ui/theme';
import { colors } from 'ui/theme/colors';
import { TypographyProps } from './types';

const typographyVariant = {
  h1: `
    font-family: ${Typography.FONT_FAMILY_REGULAR};
    font-size: ${Typography.FONT_SIZE_64}px;
    line-height: ${Typography.LINE_HEIGHT_93}px;
  `,
  h2: `
    font-family: ${Typography.FONT_FAMILY_BOLD};
    font-size: ${Typography.FONT_SIZE_26}px;
    line-height: ${Typography.LINE_HEIGHT_39}px;
  `,
  h3: `
    font-family: ${Typography.FONT_FAMILY_BOLD};
    font-size: ${Typography.FONT_SIZE_18}px;
    line-height: ${Typography.LINE_HEIGHT_27}px;
  `,
  h4: `
    font-family: ${Typography.FONT_FAMILY_BOLD};
    font-size: ${Typography.FONT_SIZE_16}px;
    line-height: ${Typography.LINE_HEIGHT_24}px;
  `,
  h5: `
    font-family: ${Typography.FONT_FAMILY_REGULAR};
    font-size: ${Typography.FONT_SIZE_16}px;
    line-height: ${Typography.LINE_HEIGHT_24}px;
  `,
  body1: `
    font-family: ${Typography.FONT_FAMILY_REGULAR};
    font-size: ${Typography.FONT_SIZE_14}px;
    line-height: ${Typography.LINE_HEIGHT_21}px;
  `,
  body2: `
    font-family: ${Typography.FONT_FAMILY_BOLD};
    font-size: ${Typography.FONT_SIZE_14}px;
    line-height: ${Typography.LINE_HEIGHT_21}px;
  `,
};

export const Text = styled.Text<TypographyProps>`
  ${({ variant }) => typographyVariant[variant]}
  color: ${({ color }) => colors[color]};
  text-align: ${({ align }) => align};
  ${({ onPress }) => (onPress ? 'text-decoration-line: underline;' : '')}
`;
