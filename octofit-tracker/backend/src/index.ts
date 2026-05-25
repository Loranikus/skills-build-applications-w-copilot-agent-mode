import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import { apiRouter } from './routes';
import { baseUrl, mongoUri, port } from './config';

mongoose.set('bufferCommands', false);

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', apiRouter);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', baseUrl, service: 'octofit-backend' });
});

app.use((error: unknown, _request: express.Request, response: express.Response, _next: express.NextFunction) => {
  console.error('API request failed:', error);
  response.status(500).json({ message: 'API request failed' });
});

async function start(): Promise<void> {
  app.listen(port, () => {
    console.log(`OctoFit API listening on ${baseUrl}`);
  });

  try {
    await mongoose.connect(mongoUri, {
      dbName: 'octofit_db',
      serverSelectionTimeoutMS: 2000,
    });
    console.log('MongoDB connected to octofit_db');
  } catch (error) {
    console.warn('MongoDB connection unavailable:', error);
  }
}

void start();
