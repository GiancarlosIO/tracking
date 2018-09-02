
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users_workspaces', (table) => {
      table.increments('id').primary();
      table.integer('user_id').references('id').inTable('users');
      table.integer('workspace_id').references('id').inTable('workspaces');
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users_workspaces'),
  ]);
};
