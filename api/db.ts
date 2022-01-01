import mongoose from 'mongoose';
import { MongoDbConfig } from './config/buildMongoDbConfig';

export function connectDb(url: string) {
  try {
    mongoose.connect(url, () => {
      console.log('Connected to MongoDB');
    });
  } catch (err) {
    console.error(err);
  }
}

export function buildMongoDbUrl(config: MongoDbConfig): string {
  return 'mongodb://'
    + `${ config.appUser }:${ encodeURIComponent(config.appPassword) }`
    + `@${ config.mongoHostname }:${ config.mongoPort }`
    + `/${ config.dbName }`;
}
