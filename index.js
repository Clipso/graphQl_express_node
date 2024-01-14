import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

//types
import { typeDefs } from './schema.js';
import { resolvers } from './resolvers.js';


//server setup
const server = new ApolloServer({
    typeDefs,
    resolvers,
})

const { url } = await startStandaloneServer( server, {
    listen: { port: 4000 }
});

console.log(`🚀 Server ready at ${url}`);



