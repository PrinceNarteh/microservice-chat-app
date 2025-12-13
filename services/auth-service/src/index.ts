import { env } from '@/config/env';
import { createServer } from 'http';
import { createApp } from './app';
import { logger } from './utils/logger';

const main = async () => {
  try {
    const app = createApp();
    const server = createServer(app);
    const PORT = env.AUTH_SERVICE_PORT;

    server.listen(PORT, () => {
      logger.info({ PORT }, 'Auth service is running ');
    });
  } catch (error) {
    logger.error({ error }, 'Failed to start auth service');
    process.exit(1);
  }
};

void main();
