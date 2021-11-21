import { Context } from 'state';

export const loadSongs = async ({ state, effects }: Context): Promise<void> => {
  try {
    state.songs = (await effects.api.getSongs()).data;
  } catch (error: unknown) {
    console.log('ERROR!', error);
  }
};
