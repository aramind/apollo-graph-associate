const gql = require("graphql-tag");

const typeDefs = gql`
  ""
  type Query {
    tracksForHome: [Track!]!
    track(id: ID!): Track
  }

  "A track is a group of modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    description: String
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
    numberOfViews: Int
    modules: [Module!]!
  }

  type Module {
    id: ID!
    title: String
    length: Int
  }
  "Author of a complete track"
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

module.exports = typeDefs;
