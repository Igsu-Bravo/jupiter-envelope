import axios from 'axios';

export const api = {
  getSongs: (): Promise<string> => axios.get('/api/1v/songs'),
};
