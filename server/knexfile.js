// Update with your config settings.
const pg = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// pg.defaults.ssl = true;

module.exports = {
  client: 'postgresql',
  connection: process.env.DATABASE_URL,
  debug: process.env.NODE_ENV === 'development',

  // development: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'customstagings-dev',
  //   }
  // },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'custom-stagings-staging',
  //     // user:     'username',
  //     // password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: process.env.DATABASE_URL,
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
