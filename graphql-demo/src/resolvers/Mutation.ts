import {books, ratings} from "../data";
export default {
    addBook: (parent, args, context) => {
        const book = {
            id: args.input.id,
            title: args.input.title,
            author: args.input.author,
            ratings: args.input.ratings
        }
        books.push(book)
        return book;
    },
    deleteBook: (parent, args, context) => {
        const book = {
            id: args.id,
        }
        
        books.filter((book) => book.id != args.id)
        return book
    },
    addRating: (parent, args, context) => {
        const rating = {
            id: args.input.id,
            value: args.input.value,
            bookId: args.input.bookId
        }
        ratings.push(rating)
        return rating;
    }
}