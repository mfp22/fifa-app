import styled from 'styled-components';

interface TeamStatisticsNumberProps {
  number: number;
}

export const Team = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  display: grid;
  grid-template-rows: 20px 110px 70px;
`;

export const TeamTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const TeamLocality = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const TeamMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1rem 0;
`;

export const TeamLogo = styled.img`
  width: 65px;
  height: 65px;
  margin-bottom: 1rem;
`;

export const TeamName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.textTertiary};
  margin: 0;
  font-weight: 500;
`;

export const TeamStatistics = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const TeamStatisticsItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TeamStatisticsLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.5rem;
  display: block;
  text-transform: uppercase;
`;

export const TeamStatisticsNumber = styled.p<TeamStatisticsNumberProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, number }) =>
    number >= 85
      ? theme.colors.successDark
      : number < 85 && number >= 79
      ? theme.colors.success
      : number < 79 && number >= 65
      ? theme.colors.warning
      : theme.colors.danger};
  border-radius: 4px;
  padding: 0.6rem;
  width: 20px;
  height: 20px;
`;
