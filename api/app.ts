import express, { Express } from 'express';
import cors from 'cors';
import routerIndex from './routerIndex';

export default function createApp(app: Express): Express {
  app.use(express.json());
  app.use(cors());
  app.use('/api', routerIndex());
  return app;
}

