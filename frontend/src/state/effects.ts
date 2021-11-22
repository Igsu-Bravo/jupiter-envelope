import axios, { AxiosResponse } from 'axios';
import { ISong } from './types';

export const api = {
  getSongs: (): Promise<AxiosResponse<ISong[]>> =>
    axios.get('http://localhost:8080/api/v1/songs'),
};
