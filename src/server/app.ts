import express from 'express';
import { createRouter } from './router';
import { EApiPath } from './types';

const createApp = () => {
  const app = express();

  const router = createRouter();
  app.use(EApiPath.eventsPath, router);

  return app;
};

export { createApp };
