// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    id: Int
    title: String
    author: String
    ratings: [Rating!]!
  }
  type Rating {
    id: Int
    value: Int!
    book: Book!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
  type Mutation {
    addBook(input:BookInput): Book
    deleteBook(id:Int): Book
    addRating: Rating
  }
  input BookInput{
    id: Int
    title: String
    author: String
  }
  input RatingInput {
    value: Int!
    bookId: Int!
    }
`;
export default typeDefs