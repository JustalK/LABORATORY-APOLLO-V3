const faker = require('faker');
const casual = require('casual');

module.exports = {
  Int: () => 6,
  Float: () => 22.1,
  String: () => 'Hello',
  Author: () => ({
    name: casual.name
  })
};
