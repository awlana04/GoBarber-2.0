import { ApolloServer } from 'apollo-server';

import { schema } from './graphql/index';
import { createContext } from './context';

const server = new ApolloServer({ schema, context: createContext });

server.listen().then(({ port }) => console.log(`🚀 Server is listening on port ${port}`));
