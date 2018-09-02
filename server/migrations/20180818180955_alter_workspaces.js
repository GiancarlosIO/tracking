
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('workspaces', (table) => {
      table.unique('name');
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('workspaces', (table) => {
      table.dropUnique('name');
    })
  ]);
};
