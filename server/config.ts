import { IConfig } from 'types';

const config: IConfig = {
  host: process.env.BACKEND_HOST || 'localhost',
  port: parseInt(`${process.env.BACKEND_PORT}`, 10) || 8080,
};

export default config;
