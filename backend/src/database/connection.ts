import * as Knex from 'knex';
import configuration from './knexfile';

const connection = Knex(configuration.staging);

export default connection;
