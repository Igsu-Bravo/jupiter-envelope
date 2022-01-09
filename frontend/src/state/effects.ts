import axios, { AxiosResponse } from 'axios';
import { ISong } from './types';
import { config } from '../config';

const apiURL = `http://${config.apiHost}:${config.apiPort}${config.apiPath}`;

export const api = {
  getSongs: (): Promise<AxiosResponse<ISong[]>> => axios.get(`${apiURL}/songs`),
};
