import express, { Router } from 'express';

// This function returns an express router with the defined routes when called
const createRouter = (): Router => {
  const router = express.Router();

  router.get('/', (_, res) => {
    res.status(200).send({
      songs: [
        {
          name: 'song 1',
          description: 'something',
        },
        {
          name: 'song 2',
          description: 'something even better',
        },
      ],
    });
  });

  return router;
};

export { createRouter };
