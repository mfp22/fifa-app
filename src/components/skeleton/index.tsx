import React from 'react';
import { useStore } from 'store';
import * as S from './styles';

const Skeleton = () => {
  const darkTheme = useStore((state) => state.darkTheme);
  return (
    <S.Team>
      <S.TeamTop>
        <S.TeamLocality darkTheme={darkTheme} />
      </S.TeamTop>
      <S.TeamMain>
        <S.TeamLogo>
          <S.TeamLogoSVG viewBox="0 0 85 86">
            <S.TeamLogoPath
              darkTheme={darkTheme}
              d="M79.471 12.1633C77.8361 8.79917 75.8201 5.62656 73.4613 2.70551L72.7376 2.97735C64.2927 6.24961 55.8713 6.31117 47.5232 2.69526C45.83 1.96182 44.278 0.900129 42.6606 0H42.3209C42.2615 0.0891532 42.1893 0.169469 42.1066 0.238494C34.4953 5.02123 26.2751 6.53171 17.4488 4.56476C15.4369 4.11597 13.4876 3.40305 11.4234 2.78758C10.7964 3.64155 10.0883 4.54937 9.43504 5.49566C4.65867 12.4197 1.79755 20.0388 0.595623 28.2938C-0.374656 34.8032 -0.182796 41.4287 1.16262 47.8736C2.87406 56.0414 6.53212 63.2604 12.3406 69.3792C20.4771 77.942 30.6047 83.0684 42.1066 85.7585C42.4102 85.8139 42.7229 85.7972 43.0185 85.7098C51.7195 83.4017 59.66 79.555 66.7018 74.0209C77.5923 65.4581 83.7561 54.3591 84.8143 40.6623C85.6321 30.866 83.7883 21.0321 79.471 12.1633Z"
            />
          </S.TeamLogoSVG>
        </S.TeamLogo>
        <S.TeamName darkTheme={darkTheme} />
      </S.TeamMain>
      <S.TeamStatistics>
        <S.TeamStatisticsItem>
          <S.TeamStatisticsLabel>Ata</S.TeamStatisticsLabel>
          <S.TeamStatisticsNumber darkTheme={darkTheme}>
            0
          </S.TeamStatisticsNumber>
        </S.TeamStatisticsItem>
        <S.TeamStatisticsItem>
          <S.TeamStatisticsLabel>Mid</S.TeamStatisticsLabel>
          <S.TeamStatisticsNumber darkTheme={darkTheme}>
            0
          </S.TeamStatisticsNumber>
        </S.TeamStatisticsItem>
        <S.TeamStatisticsItem>
          <S.TeamStatisticsLabel>Def</S.TeamStatisticsLabel>
          <S.TeamStatisticsNumber darkTheme={darkTheme}>
            0
          </S.TeamStatisticsNumber>
        </S.TeamStatisticsItem>
      </S.TeamStatistics>
    </S.Team>
  );
};

export default Skeleton;
