import styled from 'styled-components';

interface TeamProps {
  themeState: string;
}

export const Team = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  display: grid;
  grid-template-rows: 20px 1fr 70px;
`;

export const TeamTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.cardText};
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

export const TeamLogo = styled.div`
  margin-bottom: 1rem;
`;

export const TeamLogoSVG = styled.svg`
  width: 65px;
  height: 65px;
`;

export const TeamLogoPath = styled.path<TeamProps>`
  fill: ${({ themeState }) => (themeState === 'dark' ? '#013752' : '#C5E9FD')};
`;


export const TeamName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.cardText};
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
  color: ${({ theme }) => theme.colors.cardText};
  margin-bottom: 0.5rem;
  display: block;
  text-transform: uppercase;
`;

export const TeamStatisticsNumber = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.cardText};
  background-color: ${({ theme }) => theme.colors.cardInner};
  border-radius: 4px;
  padding: 0.6rem;
  width: 20px;
  height: 20px;
`;
