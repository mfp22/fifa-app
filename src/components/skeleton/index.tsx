import React from 'react';
import * as S from './styles';

const Skeleton = () => {

  return (
    <S.Team>
      <S.TeamTop>
        <S.TeamLocality/>
      </S.TeamTop>
      <S.TeamMain>
        <S.TeamLogo />
        <S.TeamName />
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

export default Skeleton;
