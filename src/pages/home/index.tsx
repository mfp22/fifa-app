import React from 'react';
import * as S from './styles';
import Logo from 'assets/images/logo.png';

const Home = () => {
  return (
    <S.Home>
      <S.Header>
        <S.Logo src={Logo} />
      </S.Header>
    </S.Home>
  );
};

export default Home;
