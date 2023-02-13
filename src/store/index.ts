import { create } from 'zustand';
import { ITeam } from 'interfaces';
import teams from 'data/data.json';

interface DefaultState {
  teamHome: ITeam;
  teamAway: ITeam;
  setTeamHome: () => void;
  setTeamAway: () => void;
}

const generateTeamAway = (teamHome: ITeam) => {
  const filterByOverall = teams.filter(
    (item) =>
      item.statistics.overall === teamHome?.statistics?.overall &&
      item.id !== teamHome?.id
  );
  return filterByOverall[Math.floor(Math.random() * filterByOverall.length)];
};

export const useStore = create<DefaultState>((set) => ({
  teamHome: teams[0],
  teamAway: teams[1],
  setTeamHome: () =>
    set(() => ({
      teamHome: teams[Math.floor(Math.random() * teams.length)],
    })),
  setTeamAway: () =>
    set((state) => ({
      teamAway: generateTeamAway(state.teamHome),
    })),
}));
