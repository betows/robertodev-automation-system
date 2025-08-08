import express, { Request, Response } from 'express';
import winston from 'winston';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Winston logger setup
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({ format: winston.format.simple() })
  ]
});

app.get('/health', (_req: Request, res: Response) => {
  logger.info('Health check requested');
  res.json({ status: 'ok', service: 'robertodev-bot' });
});

app.listen(port, () => {
  logger.info(`RobertoDev Bot backend listening on port ${port}`);
});