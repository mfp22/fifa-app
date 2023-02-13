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

  const { setTeamHome, setTeamAway } = useStore();

  return (
    <S.Home>
      <Header />
      <Team team={teamHome} onReflesh={setTeamHome} locality="Home" />
      <VS />
      <Team team={teamAway} onReflesh={setTeamAway} locality="Away" />
      <S.ButtonWrapper>
        <Button label="Generate" onClick={setTeamHome} />
      </S.ButtonWrapper>
    </S.Home>
  );
};

export default Home;
