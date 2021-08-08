const { gql } = require('apollo-server-express')

module.exports = gql`
  union SearchResult = Book | Author

  type Book {
    title: String
    author: Author
  }

  interface Livre {
    title: String
    author: Author
  }

  type LivreA implements Livre {
    title: String!
    author: Author!
    chapter: Int!
  }

  type LivreB implements Livre {
    title: String!
    author: Author!
    sentance: Int!
  }

  type Author {
    name: String
  }

  type Query {
    experience1: [Book]
    experience3: [Livre!]
    search(contains: String): [SearchResult!]
  }
`
