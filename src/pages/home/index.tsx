import React from 'react';
import * as S from './styles';
import Logo from 'assets/images/logo.png';
import { BiRefresh } from 'react-icons/bi';
import { useStore } from 'store';

const Home = () => {
  const teamHome = useStore((state) => state.teamHome);
  const teamAway = useStore((state) => state.teamAway);

  const { setTeamHome, setTeamAway } = useStore();

  return (
    <S.Home>
      <S.Header>
        <S.Logo src={Logo} />
      </S.Header>
      <S.Team>
        <S.TeamTop>
          <S.TeamLocality>Home</S.TeamLocality>
          <BiRefresh size={24} onClick={setTeamHome} />
        </S.TeamTop>
        <S.TeamMain>
          <S.TeamLogo src={teamHome?.logo} />
          <S.TeamName>{teamHome?.name}</S.TeamName>
        </S.TeamMain>
        <S.TeamStatistics>
          <S.TeamStatisticsItem>
            <S.TeamStatisticsLabel>Ata</S.TeamStatisticsLabel>
            <S.TeamStatisticsNumber>
              {teamHome?.statistics?.ata}
            </S.TeamStatisticsNumber>
          </S.TeamStatisticsItem>
          <S.TeamStatisticsItem>
            <S.TeamStatisticsLabel>Mid</S.TeamStatisticsLabel>
            <S.TeamStatisticsNumber>
              {teamHome?.statistics?.mid}
            </S.TeamStatisticsNumber>
          </S.TeamStatisticsItem>
          <S.TeamStatisticsItem>
            <S.TeamStatisticsLabel>Def</S.TeamStatisticsLabel>
            <S.TeamStatisticsNumber>
              {teamHome?.statistics?.def}
            </S.TeamStatisticsNumber>
          </S.TeamStatisticsItem>
        </S.TeamStatistics>
      </S.Team>
      <S.VS>
        <S.VSLabel>vs</S.VSLabel>
      </S.VS>
      <S.Team>
        <S.TeamTop>
          <S.TeamLocality>Home</S.TeamLocality>
          <BiRefresh size={24} onClick={setTeamAway} />
        </S.TeamTop>
        <S.TeamMain>
          <S.TeamLogo src={teamAway?.logo} />
          <S.TeamName>{teamAway?.name}</S.TeamName>
        </S.TeamMain>
        <S.TeamStatistics>
          <S.TeamStatisticsItem>
            <S.TeamStatisticsLabel>Ata</S.TeamStatisticsLabel>
            <S.TeamStatisticsNumber>
              {teamAway?.statistics?.ata}
            </S.TeamStatisticsNumber>
          </S.TeamStatisticsItem>
          <S.TeamStatisticsItem>
            <S.TeamStatisticsLabel>Mid</S.TeamStatisticsLabel>
            <S.TeamStatisticsNumber>
              {teamAway?.statistics?.mid}
            </S.TeamStatisticsNumber>
          </S.TeamStatisticsItem>
          <S.TeamStatisticsItem>
            <S.TeamStatisticsLabel>Def</S.TeamStatisticsLabel>
            <S.TeamStatisticsNumber>
              {teamAway?.statistics?.def}
            </S.TeamStatisticsNumber>
          </S.TeamStatisticsItem>
        </S.TeamStatistics>
      </S.Team>
      <S.ButtonWrapper>
        <S.Button onClick={setTeamHome}>Generate</S.Button>
      </S.ButtonWrapper>
    </S.Home>
  );
};

export default Home;
