import express from 'express';
import { createRouter } from './router';
import { EApiPath } from './types';

const createApp = () => {
  const app = express();

  const router = createRouter();
  app.use(EApiPath.songsPath, router);

  return app;
};

export { createApp };
