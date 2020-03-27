export default {
  development: {
    client: 'sqlite3',
    connection: {
      filename: 'db.sqlite'
    },
    migrations: {
      directory: 'migrations',
      extension: 'ts'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'mysql',
    connection: {
      host: 'remotemysql.com',
      database: '5tGD0YKoPx',
      user: '5tGD0YKoPx',
      password: 'XxrF6CHfY9'
    },
    migrations: {
      directory: 'migrations',
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
