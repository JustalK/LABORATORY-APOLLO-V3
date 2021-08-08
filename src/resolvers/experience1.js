const { GraphQLScalarType, Kind } = require('graphql');

function oddValue(value) {
  if (typeof value === "number" && Number.isInteger(value) && value % 2 !== 0) {
    return value;
  }
  throw new UserInputError("Provided value is not an odd integer");
}

module.exports =  {
  SearchResult: {
   __resolveType(obj, context, info){
     if(obj.name){
       return 'Author';
     }
     if(obj.title){
       return 'Book';
     }
     return null;
   },
 },
 Livre: {
    __resolveType(book, context, info){
      if(book.chapter){
        return 'LivreA';
      }
      if(book.sentance){
        return 'LivreB';
      }
      return null;
    },
  },
  Odd: new GraphQLScalarType({
    name: 'Odd',
    description: 'Odd custom scalar type',
    parseValue: oddValue,
    serialize: oddValue,
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return oddValue(parseInt(ast.value, 10));
      }
      throw new UserInputError("Provided value is not an odd integer");
    },
  }),
  Query: {
    experience1: () => books,
  },
}
