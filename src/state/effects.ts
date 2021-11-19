import axios from 'axios';
import { ISong } from './types';

export const api = {
  getSongs: (): Promise<ISong[]> => axios.get('/api/1v/songs'),
};
