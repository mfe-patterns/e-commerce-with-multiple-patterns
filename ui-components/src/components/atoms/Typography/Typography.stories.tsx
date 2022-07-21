import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  PText,
  Label,
  HelpText,
  HelpTextType
} from './Typography';
import * as S from './Typography.styles';

storiesOf('Atoms', module).add('Typography', () => (
  <>
    <S.Wrapper>
      <Heading1>Heading1</Heading1>
    </S.Wrapper>
    <S.Wrapper>
      <Heading2>Heading2</Heading2>
    </S.Wrapper>
    <S.Wrapper>
      <Heading3>Heading3</Heading3>
    </S.Wrapper>
    <S.Wrapper>
      <Heading4>Heading4</Heading4>
    </S.Wrapper>
    <S.Wrapper>
      <PText>Paragraph</PText>
    </S.Wrapper>
    <S.Wrapper>
      <Label>Label</Label>
    </S.Wrapper>
    <S.Wrapper>
      <HelpText type={HelpTextType.DEFAULT}>HelpText</HelpText>
    </S.Wrapper>
    <S.Wrapper>
      <HelpText type={HelpTextType.SUCCESS}>HelpTextError</HelpText>
    </S.Wrapper>
    <S.Wrapper>
      <HelpText type={HelpTextType.ERROR}>HelpTextSuccess</HelpText>
    </S.Wrapper>
  </>
));
