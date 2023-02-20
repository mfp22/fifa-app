import React from 'react';
import Logo from 'assets/images/logo.png';
import LogoDark from 'assets/images/logo-dark.png';
import { BiCog } from 'react-icons/bi';
import * as S from './styles';
import { useStore } from 'store';

const Header = () => {
  const theme = useStore((state) => state.theme);
  return (
    <S.Header>
      <S.Logo src={theme === 'dark' ? Logo : LogoDark} />
      <S.Settings to="/settings">
        <BiCog size={24} />
      </S.Settings>
    </S.Header>
  );
};

export default Header;
