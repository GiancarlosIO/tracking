import { Model } from 'objection';
import { DbErrors } from 'objection-db-errors';
import knex from 'knex';
import config from '../knexfile';

// need to create a knex instance and pass it to objection Model class
const knexConnection = knex(config);

Model.knex(knexConnection);

class Base extends DbErrors(Model) {
  $beforeInsert() {
    this.created_at = new Date().toISOString();
  }
  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
}

export default Base;
