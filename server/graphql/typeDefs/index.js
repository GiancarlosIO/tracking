import { importSchema } from 'graphql-import';

const typeDefs = importSchema('./graphql/typeDefs/schema.graphql');

export default typeDefs;