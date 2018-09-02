
const faker = require('faker');

const USERS_COUNT = 10;
const users = Array.from({ length: USERS_COUNT }).map((_, i) => ({
  id: i,
  username: faker.internet.userName(),
  email: faker.internet.email(),
  description: faker.lorem.sentence(),
  password: faker.internet.password(),
}))

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
  .then(function () {
      // Inserts seed entries
      return knex('users').insert(users);
    });
};
