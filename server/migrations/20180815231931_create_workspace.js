
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('workspaces', table => {
      table.increments('id').primary();
      table.string('name');
      table.string('description');
      table.string('logo');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.droptable('workspaces'),
  ]);
};
