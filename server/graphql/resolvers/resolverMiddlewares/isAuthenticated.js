import { ForbiddenError } from 'apollo-server-express';

export default (resolver) => (rootData, args, context, options) => {
  if (!context.me) {
    throw new ForbiddenError('User is not authenticated');
  }

  return resolver(rootData, args, context, options);
};