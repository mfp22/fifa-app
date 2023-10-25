import React from 'react';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import Switch from 'components/switch';
import { BiChevronLeft } from 'react-icons/bi';
import { settings, useTheme } from 'store';

const Settings = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleTheme = () => {
    if (theme === 'dark') {
      settings.setTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      settings.setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <S.Settings>
      <S.SettingsTop onClick={() => navigate(-1)}>
        <BiChevronLeft size={24} />
        <S.SettingsTopLabel>Settings</S.SettingsTopLabel>
      </S.SettingsTop>
      <S.SettingsSection>
        <S.SettingsSectionLabel>Theme</S.SettingsSectionLabel>
        <S.SettingsSectionItem>
          <S.SettingsSectionItemLabel>Dark Mode</S.SettingsSectionItemLabel>
          <Switch checked={theme === 'dark'} setChecked={handleTheme} />
        </S.SettingsSectionItem>
      </S.SettingsSection>
    </S.Settings>
  );
};

export default Settings;
