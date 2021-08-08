const { gql } = require('apollo-server-express')

module.exports = gql`
  union SearchResult = Book | Author
  scalar Odd

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

  type OddNumber {
    value: Odd
  }

  type Query {
    experience1: [Book]
    experience3: [Livre!]
    experience4: OddNumber!
    search(contains: String): [SearchResult!]
  }
`
