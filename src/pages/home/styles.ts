import styled from 'styled-components';

export const Home = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 1.5rem;
  display: grid;
  grid-template-rows: 60px minmax(220px, 1fr) 60px minmax(220px, 1fr) 80px;
`;

export const Header = styled.header`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 90px;
`;

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
  color: ${({ theme }) => theme.colors.text};
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
  color: ${({ theme }) => theme.colors.white};
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
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
  display: block;
  text-transform: uppercase;
`;

export const TeamStatisticsNumber = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.success};
  border-radius: 4px;
  padding: 0.6rem;
`;

export const VS = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    z-index: 1;
    background-color: ${({ theme }) => theme.colors.text};
    left: 0;
    width: 100%;
    height: 1px;
  }
  &:before {
    content: '';
    position: absolute;
    top: 30%;
    z-index: 5;
    background-color: ${({ theme }) => theme.colors.background};
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 30px;
  }
`;

export const VSLabel = styled.span`
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  z-index: 10;
`;

export const ButtonWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: flex-end;
  padding: 1rem 0;
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.background};
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 5px;
  width: 100%;
  display: block;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 600;
  text-transform: uppercase;
  padding: 1rem 0;
  height: 45px;
`;
