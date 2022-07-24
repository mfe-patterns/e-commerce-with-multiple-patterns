import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Icon, IconType } from './Icon';
import * as S from './Icons.styles';

storiesOf('Atoms', module).add('Icons', () => (
  <>
    <S.Wrapper>
      <Icon type={IconType.trash} />
    </S.Wrapper>   
    <S.Wrapper>
      <Icon type={IconType.cart} height={30} width={30} />
    </S.Wrapper>  
  </>
));
