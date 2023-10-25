import { ITeam } from 'interfaces';
import teams from 'data/data.json';
import { createAdapter, joinAdapters } from '@state-adapt/core';
import { booleanAdapter } from '@state-adapt/core/adapters';
import { adapt } from 'state-adapt';
import { useStore } from '@state-adapt/react';

interface State {
  teamHome: ITeam;
  teamAway: ITeam;
  teamHomeActive: boolean;
  teamAwayActive: boolean;
  teamHomeLoading: boolean;
  teamAwayLoading: boolean;
  theme: string;
}

const initialState: State = {
  teamHome: teams[0],
  teamAway: teams[1],
  teamHomeActive: true,
  teamAwayActive: false,
  teamHomeLoading: false,
  teamAwayLoading: false,
  theme: localStorage.getItem('theme') || 'dark',
};

const adapter = joinAdapters<State>()({
  teamHome: createAdapter<ITeam>()({
    setRandom: () => teams[Math.floor(Math.random() * teams.length)],
  }),
  teamAway: createAdapter<ITeam>()({
    setRandom: (state) => generateTeamAway(state),
  }),
  teamHomeActive: booleanAdapter,
  teamAwayActive: booleanAdapter,
  teamHomeLoading: booleanAdapter,
  teamAwayLoading: booleanAdapter,
  theme: createAdapter<string>()({}),
})();

export const settings = adapt(initialState, adapter);
export const useTheme = () => useStore(settings, ['theme']).theme;

const generateTeamAway = (teamHome: ITeam) => {
  const filterByOverall = teams.filter(
    (item) =>
      item.statistics.overall === teamHome?.statistics?.overall &&
      item.id !== teamHome?.id
  );
  return filterByOverall[Math.floor(Math.random() * filterByOverall.length)];
};
