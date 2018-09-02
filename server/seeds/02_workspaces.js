const faker = require('faker');

const WORKSPACES_COUNT = 10;

const workspaces = Array.from({ length: WORKSPACES_COUNT })
  .map((_, index) => ({
    id: index,
    name: faker.company.companyName(),
    description: faker.lorem.sentence(),
    logo: faker.image.imageUrl(),
  }));

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('workspaces').del()
  .then(function () {
      // Inserts seed entries
      return knex('workspaces').insert(workspaces);
    });
};
