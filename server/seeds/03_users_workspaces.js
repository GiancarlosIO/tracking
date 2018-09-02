const COUNT = 10;

const values = Array.from({ length: 10 })
  .map((_, index) => ({
    user_id: index,
    workspace_id: index,
  }));

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_workspaces').del()
  .then(function () {
      // Inserts seed entries
      return knex('users_workspaces').insert(values);
    });
};
