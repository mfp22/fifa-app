import React from 'react';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import Switch from "components/switch"
import { BiChevronLeft } from 'react-icons/bi';
import { useStore } from 'store';

const Settings = () => {
  const navigate = useNavigate();
  const darkTheme = useStore((state) => state.darkTheme);
  const { setDarkTheme } = useStore();

  const handleTheme = () => setDarkTheme(!darkTheme);

  return (
    <S.Settings>
      <S.SettingsTop onClick={() => navigate(-1)}>
        <BiChevronLeft size={24} />
        <S.SettingsTopLabel>Settings</S.SettingsTopLabel>
      </S.SettingsTop>
      <S.SettingsSection>
        <S.SettingsSectionLabel>Theme</S.SettingsSectionLabel>
        <S.SettingsSectionItem>
          <S.SettingsSectionItemLabel>Light Mode</S.SettingsSectionItemLabel>
          <Switch checked={darkTheme} setChecked={handleTheme} />
        </S.SettingsSectionItem>
      </S.SettingsSection>
    </S.Settings>
  );
};

export default Settings;
