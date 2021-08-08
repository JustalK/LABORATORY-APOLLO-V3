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
  Query: {
    experience1: () => books,
  },
}
