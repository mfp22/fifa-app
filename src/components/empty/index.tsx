import React from 'react';
import * as S from './styles';
import EmptyLogo from 'assets/images/empty-logo.png';

const Empty = () => {

  return (
    <S.Team>
      <S.TeamTop>
        <S.TeamLocality>Locality</S.TeamLocality>
      </S.TeamTop>
      <S.TeamMain>
        <S.TeamLogo src={EmptyLogo} />
        <S.TeamName>Team Name</S.TeamName>
      </S.TeamMain>
      <S.TeamStatistics>
        <S.TeamStatisticsItem>
          <S.TeamStatisticsLabel>Ata</S.TeamStatisticsLabel>
          <S.TeamStatisticsNumber>0</S.TeamStatisticsNumber>
        </S.TeamStatisticsItem>
        <S.TeamStatisticsItem>
          <S.TeamStatisticsLabel>Mid</S.TeamStatisticsLabel>
          <S.TeamStatisticsNumber>0</S.TeamStatisticsNumber>
        </S.TeamStatisticsItem>
        <S.TeamStatisticsItem>
          <S.TeamStatisticsLabel>Def</S.TeamStatisticsLabel>
          <S.TeamStatisticsNumber>0</S.TeamStatisticsNumber>
        </S.TeamStatisticsItem>
      </S.TeamStatistics>
    </S.Team>
  );
};

export default Empty;
