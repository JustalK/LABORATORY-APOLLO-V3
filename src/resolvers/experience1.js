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
  Query: {
    experience1: () => books,
  },
}
