import React from 'react';
import * as S from './styles';
import Team from 'components/team';
import Empty from 'components/empty';
import Skeleton from 'components/skeleton';
import Button from 'components/button';
import VS from 'components/vs';
import { settings } from 'store';
import { useStore } from '@state-adapt/react';

const Home = () => {
  const {
    teamHome,
    teamAway,
    teamHomeActive,
    teamAwayActive,
    teamHomeLoading,
    teamAwayLoading,
  } = useStore(settings);

  const handleAddTeam = () => {
    if (teamHomeActive) {
      settings.setTeamHomeLoading(true);
      setTimeout(() => {
        settings.setTeamHomeRandom();
        settings.setTeamHomeActive(false);
        settings.setTeamHomeLoading(false);
      }, 1000);
    } else {
      settings.setTeamAwayLoading(true);
      setTimeout(() => {
        settings.setTeamAwayRandom();
        settings.setTeamAwayActive(true);
        settings.setTeamAwayLoading(false);
      }, 1000);
    }
  };

  const handleRefleshTeamHome = () => {
    settings.setTeamHomeLoading(true);
    setTimeout(() => {
      settings.setTeamHomeRandom();
      settings.setTeamHomeActive(false);
      settings.setTeamHomeLoading(false);
    }, 1000);
  };

  const handleRefleshTeamAway = () => {
    settings.setTeamAwayLoading(true);
    setTimeout(() => {
      settings.setTeamAwayRandom();
      settings.setTeamAwayLoading(false);
    }, 1000);
  };

  return (
    <S.Home>
      {teamHomeLoading ? (
        <Skeleton />
      ) : !teamHomeLoading && teamHomeActive ? (
        <Empty />
      ) : (
        <Team
          team={teamHome}
          onReflesh={handleRefleshTeamHome}
          locality="Home"
        />
      )}

      <VS />

      {teamAwayLoading ? (
        <Skeleton />
      ) : !teamAwayLoading && !teamAwayActive ? (
        <Empty />
      ) : (
        <Team
          team={teamAway}
          onReflesh={handleRefleshTeamAway}
          locality="Away"
        />
      )}

      <S.ButtonWrapper>
        {teamHomeActive ? (
          <Button label="Add Team Home" onClick={handleAddTeam} />
        ) : (
          <Button
            label="Add Team Away"
            onClick={handleAddTeam}
            disabled={teamAwayActive}
          />
        )}
      </S.ButtonWrapper>
    </S.Home>
  );
};

export default Home;
