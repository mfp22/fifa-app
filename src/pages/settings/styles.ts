import styled from 'styled-components';

export const Settings = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 1.5rem;
`;

export const SettingsTop = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textTertiary};
  gap: 1rem;
  margin: 2rem 0;
`;

export const SettingsTopLabel = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const SettingsSection = styled.div`
`;

export const SettingsSectionLabel = styled.p`
  margin: 0;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const SettingsSectionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.card};
`;

export const SettingsSectionItemLabel = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textTertiary};
  font-size: ${({ theme }) => theme.fontSize.small};
`;
