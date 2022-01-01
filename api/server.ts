import express from 'express';
import createApp from './app';
import { buildMongoDbUrl, connectDb } from './db';
import * as dotenv from 'dotenv';
import { buildMongoDbConfig } from './config/buildMongoDbConfig';

dotenv.config();
const mongoConfig = buildMongoDbConfig();
const url = buildMongoDbUrl(mongoConfig);
const app = createApp(express());
app.set('port', 3000);
const server = app.listen(3000, async () => {
  console.log('listening on port 3000');
  const db = await connectDb(url);
  console.log('MongoDB connected');
});


