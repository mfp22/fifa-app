import React from 'react';
import { ISwitchComponent } from 'interfaces';
import * as S from './styles';

const Switch = (props: ISwitchComponent) => {
  const { checked, setChecked } = props;
  return (
    <S.Switch>
      <S.SwitchCheckBox id="switch" type="checkbox" />
      <S.SwitchLabel
        htmlFor="switch"
        checked={checked}
        onClick={setChecked}
      />
    </S.Switch>
  );
};

export default Switch;
