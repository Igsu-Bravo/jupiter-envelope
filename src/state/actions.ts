import { Context } from 'state';

export const loadSongs = async ({ state, effects }: Context): Promise<void> => {
  state.songs = await effects.api.getSongs();
};
