const faker = require('faker');
const casual = require('casual');

module.exports = {
  Int: () => casual.integer(from = 0, to = 10),
  Float: () => 22.1,
  String: () => 'Hello',
  Author: () => ({
    name: casual.name
  }),
  Odd: () => 3
};
