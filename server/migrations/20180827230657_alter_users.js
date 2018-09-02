
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('users', (table) => {
      table.timestamp('created_at').defaultTo(knex.fn.now(6));
      table.timestamp('updated_at').defaultTo(knex.fn.now(6));
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('users', (table) => {
      table.dropColumn('created_at');
      table.dropColumn('updated_at');
    }),
  ]);
};
