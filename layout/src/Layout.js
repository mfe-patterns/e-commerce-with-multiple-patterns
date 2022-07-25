import React from 'react';

import Header from './Header';
import Footer from './Footer';
import * as S from './Layout.styles';

export default () => {
  return (
    <S.Layout>
      <Header />
      <S.Main id="main-dev-root" />
      <Footer />
    </S.Layout>
  )
}