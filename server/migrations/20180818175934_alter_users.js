
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('users', (table) => {
      table.unique('email');
      table.unique('username');
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('users', (table) => {
      table.dropUnique('email');
      table.dropUnique('username');
    }),
  ]);
};
