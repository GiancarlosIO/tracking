import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import ConstraintDirective from 'graphql-constraint-directive';
import {
  ApolloServer,
  AuthenticationError,
} from 'apollo-server-express';

import * as models from './models';

import typeDefs from './graphql/typeDefs/';
import resolvers from './graphql/resolvers/';

dotenv.config();

const getMe = async (req) => {
  const token = req.headers['x-token'];

  if (token) {
    try {
      return jwt.verify(token, process.env.SECRET_KEY);
    } catch (e) {
      throw new AuthenticationError('Your session expired. Sign in again');
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const me = await getMe(req);
    return {
      me,
      models,
      secret: process.env.SECRET_KEY,
    };
  },
  schemaDirectives: {
    constraint: ConstraintDirective,
  },
  playground: {
    settings: {
      'editor.theme': 'light',
      'editor.cursorShape': 'line',
    },
  }
});
const app = express();

server.applyMiddleware({ app });

app.listen(3000, () => {
  console.log('> 🚀  App is running in port 3000', server.graphqlPath);
});
