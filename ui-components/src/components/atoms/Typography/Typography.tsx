import React, { ReactNode } from 'react';
import * as S from './Typography.styles';
import { theme } from '../../../theme/theme';

export interface IText {
  children: ReactNode | string;
  color?: string;
}

export enum HelpTextType {
  DEFAULT = 'default',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface IHelpText extends IText {
  type?: HelpTextType.SUCCESS | HelpTextType.ERROR | HelpTextType.DEFAULT;
}

export const Heading1: React.FC<IText> = ({ children, ...others }: IText) => {
  return <S.Heading1 {...others}>{children}</S.Heading1>;
};

export const Heading2: React.FC<IText> = ({ children, ...others }: IText) => {
  return <S.Heading2 {...others}>{children}</S.Heading2>;
};

export const Heading3: React.FC<IText> = ({ children, ...others }: IText) => {
  return <S.Heading3 {...others}>{children}</S.Heading3>;
};

export const Heading4: React.FC<IText> = ({ children, ...others }: IText) => {
  return <S.Heading4 {...others}>{children}</S.Heading4>;
};

export const PText: React.FC<IText> = ({ children, ...others }: IText) => {
  return <S.PText {...others}>{children}</S.PText>;
};

export const Label: React.FC<IText> = ({ children, ...others }: IText) => {
  return <S.Label {...others}>{children}</S.Label>;
};

export const HelpText: React.FC<IHelpText> = ({
  children,
  type = HelpTextType.DEFAULT,
  ...others
}: IHelpText) => {
  const color = {
    default: theme.colors.dark[400],
    success: theme.colors.success,
    error: theme.colors.error,
  };
  return (
    <S.HelpText {...others} color={color[type]}>
      {children}
    </S.HelpText>
  );
};