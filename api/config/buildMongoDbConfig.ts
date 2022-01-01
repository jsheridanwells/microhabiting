export class MongoDbConfig {
  appUser: string;
  appPassword: string;
  dbName: string;
  mongoHostname: string;
  mongoPort: string | number;

  constructor(
    appUser: any,
    appPassword: any,
    dbName: any,
    mongoHostname: any,
    mongoPort: any
  ) {
    this.appUser = appUser
    this.appPassword = appPassword
    this.dbName = dbName
    this.mongoHostname = mongoHostname
    this.mongoPort = mongoPort
  }
}

/**
 * Create object with all necessary values for a Mongo DB connection
 */
export function buildMongoDbConfig(): MongoDbConfig {
  const config = new MongoDbConfig(
    process.env.APP_USER,
    process.env.APP_PWD,
    process.env.DB_NAME,
    process.env.MONGO_HOSTNAME,
    process.env.MONGO_PORT,
  );

  // throw an error if any of the required values are missing
  let k: keyof typeof config;
  for (k in config) {
    if (!config[k]) {
      throw new Error(
        `Error in buildMongoDbConfig() - env variable ${ k } must be defined.`
      );
    }
  }
  return config;
}
