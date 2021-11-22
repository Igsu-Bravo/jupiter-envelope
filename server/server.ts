import enableDestroy from 'server-destroy';
import { createApp } from './app';

// eslint-disable-next-line
const self = this;

// TODO: Bring this stuff from config
enum EWebParams {
  port = 8080,
  host = 'localhost',
}

const createServer = (gracefulShutdown = true): Express.Application => {
  // Create express server and start listening
  const app = createApp();
  const server = app.listen(EWebParams.port, EWebParams.host, () => {
    console.log(`Listening on ${EWebParams.host}:${EWebParams.port}`);
  });

  enableDestroy(server);

  if (gracefulShutdown) {
    // Handler for shutdown
    const closeServer = (signal: NodeJS.Signals) => {
      console.log(`${signal} received`);
      console.log('Closing server...');
      server.destroy();
    };

    // Handle signals grcefully
    process.on('SIGTERM', closeServer.bind(self, 'SIGTERM'));
    process.on('SIGINT', closeServer.bind(self, 'SIGINT'));

    server.on('close', () => {
      console.log('Server close event fired, givin 5000ms time to cleanup...');
      setTimeout(process.exit, 5000);
    });
  }

  return server;
};

export { createServer };
