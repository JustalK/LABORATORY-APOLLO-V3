const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./src/types/experience1')
const resolvers = require('./src/resolvers/experience1')
const mocks = require('./experience2')

console.log(mocks);
const server = new ApolloServer({
  typeDefs,
  mocks
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
