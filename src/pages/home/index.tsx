import React from 'react';
import * as S from './styles';
import Header from 'components/header';
import Team from 'components/team';
import Button from 'components/button';
import VS from 'components/vs';
import { useStore } from 'store';

const Home = () => {
  const teamHome = useStore((state) => state.teamHome);
  const teamAway = useStore((state) => state.teamAway);
  const teamHomeActive = useStore((state) => state.teamHomeActive);
  const teamAwayActive = useStore((state) => state.teamAwayActive);

  const { setTeamHome, setTeamAway, setTeamHomeActive, setTeamAwayActive } =
    useStore();

  const handleGenerateTeam = () => {
    if (teamHomeActive) {
      setTimeout(() => {
        setTeamHome();
        setTeamHomeActive(false);
      }, 1000);
    } else {
      setTimeout(() => {
        setTeamAway();
        setTeamAwayActive(true);
      }, 1000);
    }
  };

  return (
    <S.Home>
      <Header />
      <Team team={teamHome} onReflesh={setTeamHome} locality="Home" />
      <VS />
      <Team team={teamAway} onReflesh={setTeamAway} locality="Away" />
      <S.ButtonWrapper>
        {teamHomeActive ? (
          <Button label="Generate Home" onClick={handleGenerateTeam} />
        ) : (
          <Button
            label="Generate Away"
            onClick={handleGenerateTeam}
            disabled={teamAwayActive}
          />
        )}
      </S.ButtonWrapper>
    </S.Home>
  );
};

export default Home;
