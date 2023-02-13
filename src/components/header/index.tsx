import React from 'react';
import Logo from 'assets/images/logo.png';
import * as S from './styles';

const Header = () => {
  return (
    <S.Header>
      <S.Logo src={Logo} />
    </S.Header>
  );
};

export default Header;
