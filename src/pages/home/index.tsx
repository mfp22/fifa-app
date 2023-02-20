import React from 'react';
import * as S from './styles';
import Team from 'components/team';
import Empty from 'components/empty';
import Skeleton from 'components/skeleton';
import Button from 'components/button';
import VS from 'components/vs';
import { useStore } from 'store';

const Home = () => {
  const teamHome = useStore((state) => state.teamHome);
  const teamAway = useStore((state) => state.teamAway);
  const teamHomeActive = useStore((state) => state.teamHomeActive);
  const teamAwayActive = useStore((state) => state.teamAwayActive);
  const teamHomeLoading = useStore((state) => state.teamHomeLoading);
  const teamAwayLoading = useStore((state) => state.teamAwayLoading);

  const {
    setTeamHome,
    setTeamAway,
    setTeamHomeActive,
    setTeamAwayActive,
    setTeamHomeLoading,
    setTeamAwayLoading,
  } = useStore();

  const handleAddTeam = () => {
    if (teamHomeActive) {
      setTeamHomeLoading(true)
      setTimeout(() => {
        setTeamHome();
        setTeamHomeActive(false);
        setTeamHomeLoading(false)
      }, 1000);
    } else {
      setTeamAwayLoading(true)
      setTimeout(() => {
        setTeamAway();
        setTeamAwayActive(true);
        setTeamAwayLoading(false)
      }, 1000);
    }
  };

  const handleRefleshTeamHome = () => {
    setTeamHomeLoading(true)
    setTimeout(() => {
      setTeamHome();
      setTeamHomeActive(false);
      setTeamHomeLoading(false)
    }, 1000);
  };

  const handleRefleshTeamAway = () => {
    setTeamAwayLoading(true)
    setTimeout(() => {
      setTeamAway();
      setTeamAwayLoading(false)
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
