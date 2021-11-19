import { Context } from 'state';

export const loadSongs = async ({ state, effects }: Context) => {
  state.songs = await effects.api.getSongs();
};
