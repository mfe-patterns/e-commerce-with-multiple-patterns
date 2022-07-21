import styled from "styled-components";

import { theme as coreTheme } from "../../../theme/theme";

export interface IText {
  color?: string;
  theme: typeof coreTheme;
}

export const Wrapper = styled.div`
  margin: 20px;
`;

export const Heading1 = styled.h1<IText>`
  font-family: ${({ theme }) => theme.typography.heading1.fontFamily};
  font-size: ${({ theme }) => theme.typography.heading1.fontSize};
  line-height: ${({ theme }) => theme.typography.heading1.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.heading1.letterSpacing};
  color: ${({ color, theme }) => color || theme.colors.text};
`;

export const Heading2 = styled.h2<IText>`
  font-family: ${({ theme }) => theme.typography.heading2.fontFamily};
  font-size: ${({ theme }) => theme.typography.heading2.fontSize};
  line-height: ${({ theme }) => theme.typography.heading3.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.heading2.letterSpacing};
  color: ${({ color, theme }) => color || theme.colors.text};
`;

export const Heading3 = styled.h3<IText>`
  font-family: ${({ theme }) => theme.typography.heading3.fontFamily};
  font-size: ${({ theme }) => theme.typography.heading3.fontSize};
  line-height: ${({ theme }) => theme.typography.heading3.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.heading3.letterSpacing};
  color: ${({ color, theme }: IText) => color || theme.colors.text};
`;

export const Heading4 = styled.h4<IText>`
  font-family: ${({ theme }) => theme.typography.heading4.fontFamily};
  font-size: ${({ theme }) => theme.typography.heading4.fontSize};
  line-height: ${({ theme }) => theme.typography.heading4.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.heading4.letterSpacing};
  color: ${({ color, theme }: IText) => color || theme.colors.text};
`;

export const Heading5 = styled.h5<IText>`
  font-family: ${({ theme }) => theme.typography.heading5.fontFamily};
  font-size: ${({ theme }) => theme.typography.heading5.fontSize};
  line-height: ${({ theme }) => theme.typography.heading5.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.heading5.letterSpacing};
  color: ${({ color, theme }: IText) => color || theme.colors.text};
`;

export const PText = styled.p<IText>`
  font-family: ${({ theme }) => theme.typography.pText.fontFamily};
  font-size: ${({ theme }) => theme.typography.pText.fontSize};
  line-height: ${({ theme }) => theme.typography.pText.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.pText.letterSpacing};
  color: ${({ color, theme }: IText) => color || theme.colors.text};
`;

export const Label = styled.label<IText>`
  font-family: ${({ theme }) => theme.typography.label.fontFamily};
  font-size: ${({ theme }) => theme.typography.label.fontSize};
  line-height: ${({ theme }) => theme.typography.label.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.label.letterSpacing};
  color: ${({ color, theme }: IText) => color || theme.colors.text};
`;

export const HelpText = styled.p<IText>`
  font-family: ${({ theme }) => theme.typography.helpText.fontFamily};
  font-size: ${({ theme }) => theme.typography.helpText.fontSize};
  line-height: ${({ theme }) => theme.typography.helpText.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.helpText.letterSpacing};
  color: ${({ color }: IText) => color};
`;
