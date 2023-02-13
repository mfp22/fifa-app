import React from 'react';
import { IButtonComponent } from 'interfaces';
import * as S from './styles';

const Button = (props: IButtonComponent) => {
  const { onClick, label, disabled } = props;
  return (
    <S.Button onClick={onClick} disabled={disabled}>
      {label}
    </S.Button>
  );
};

export default Button;
