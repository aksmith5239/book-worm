const { User, Book } = require('../models');

const resolvers = {
    Query: {
        books: async (parent, { title }) => {
            const params = title ? { title } : {};
            return Book.find(params);
            }, 
        books: async (parent, { bookId }) => {
            return Book.findOne({ bookId });
            },
         users: async () => {
             return User.find()
             .select('-__v, -password');
         }, 
         users: async (parent, {username}) => {
             return User.findOne({username})
             .select('-__v, -password');
         }   
        }
    };

module.exports = resolvers;
