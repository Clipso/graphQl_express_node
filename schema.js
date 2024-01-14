export const typeDefs = `#graphql
type Game {
  id: ID!
  title: String!
  platform: [String!]!
  reviews: [Review!]
}
type Review {
    id: ID!
    rating: Int!
    content: String
    game: Game!
    author: Author!
}
type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
}
type Query {
    games: [Game!]!
    game(id: ID): Game!
    authors: [Author!]!
    author(id: ID): Author!
    reviews: [Review!]!
    review(id: ID): Review!
}
type Mutation {
    addGame(game: AddGameInput): Game
    deleteGame(id: ID!): [Game]
    updateGame(id: ID!, edits: EditGameInput!): Game
    addAuthor(name: String!, verified: Boolean!): Author!
    deleteAuthor(id: ID!): [Author]
    updateAuthor(id: ID!, name: String, verified: Boolean!): Author!
    addReview(rating: Int!, content: String, author_id: ID!, game_id: ID!): Review!
    deleteReview(id: ID!): [Review]
    updateReview(id: ID!, rating: Int, content: String, author_id: ID!, game_id: ID!): Review!
}
input AddGameInput {
    title: String!
    platform: [String!]!
}
input EditGameInput {
    title: String
    platform: [String!]
}
`