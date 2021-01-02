const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        bookWorm: String
    }
`;

module.exports = typeDefs;