import React from 'react';
import * as S from './styles';
import { BiRefresh } from 'react-icons/bi';
import { ITeamComponent } from 'interfaces';

const Team = (props: ITeamComponent) => {
  const { team, onReflesh, locality } = props;

  return (
    <S.Team>
      <S.TeamTop>
        <S.TeamLocality>{locality}</S.TeamLocality>
        <BiRefresh size={24} onClick={onReflesh} />
      </S.TeamTop>
      <S.TeamMain>
        <S.TeamLogo src={team?.logo} />
        <S.TeamName>{team?.name}</S.TeamName>
      </S.TeamMain>
      <S.TeamStatistics>
        <S.TeamStatisticsItem>
          <S.TeamStatisticsLabel>Ata</S.TeamStatisticsLabel>
          <S.TeamStatisticsNumber number={Number(team?.statistics?.ata)}>
            {team?.statistics?.ata}
          </S.TeamStatisticsNumber>
        </S.TeamStatisticsItem>
        <S.TeamStatisticsItem>
          <S.TeamStatisticsLabel>Mid</S.TeamStatisticsLabel>
          <S.TeamStatisticsNumber number={Number(team?.statistics?.mid)}>
            {team?.statistics?.mid}
          </S.TeamStatisticsNumber>
        </S.TeamStatisticsItem>
        <S.TeamStatisticsItem>
          <S.TeamStatisticsLabel>Def</S.TeamStatisticsLabel>
          <S.TeamStatisticsNumber number={Number(team?.statistics?.def)}>
            {team?.statistics?.def}
          </S.TeamStatisticsNumber>
        </S.TeamStatisticsItem>
      </S.TeamStatistics>
    </S.Team>
  );
};

export default Team;
