const development = {
  database: {
    username: process.env.MYSQL_USER || 'root',
    dbname: process.env.MYSQL_DATABASE || 'test',
    password: process.env.MYSQL_PASSWORD || '',
    host: process.env.MYSQL_HOST || 'localhost',
    port: process.env.MYSQL_PORT || 3306,
    dialect: process.env.MYSQL_DIALECT || 'mysql',
    logging: process.env.MYSQL_LOGGING || console.log,
  },
  appPort: process.env.PORT || 3000,
};

const production = {
  database: {
    username: process.env.MYSQL_USER,
    dbname: process.env.MYSQL_DATABASE,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    dialect: process.env.MYSQL_DIALECT,
    logging: process.env.MYSQL_LOGGING || false,
    DATABASE_URL: process.env.DATABASE_URL,
  },
  appPort: process.env.PORT,
};


module.exports = global.process.env.NODE_ENV === 'production' ? production : development;
