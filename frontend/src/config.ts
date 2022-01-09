import { IConfig } from './types';

const config: IConfig = {
  apiHost: process.env.REACT_APP_API_HOST || 'localhost',
  apiPort: parseInt(`${process.env.REACT_APP_API_PORT}`, 10) || 8080,
  apiPath: process.env.REACT_APP_API_PATH || '/',
};

export { config };
