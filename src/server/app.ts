import express, { Express } from 'express';
import { createRouter } from './router';
import { EApiPath } from './types';

const createApp = (): Express => {
  const app = express();

  const router = createRouter();

  // Simple health check
  app.use(
    router.get('/api/status', (_, res) => {
      res.send(200);
    })
  );

  // Implement V1 routes
  app.use(EApiPath.songsPath, router);

  return app;
};

export { createApp };
