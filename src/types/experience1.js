const { gql } = require('apollo-server-express')

module.exports = gql`
  union SearchResult = Book | Author

  type Book {
    title: String
    author: Author
  }

  type Author {
    name: String
  }

  type Query {
    experience1: [Book]
    search(contains: String): [SearchResult!]
  }
`
