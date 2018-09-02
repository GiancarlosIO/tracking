import { errorHandler } from '../../utils/validationError';
import isAuthenticated from './resolverMiddlewares/isAuthenticated';

const parseField = field => `users.${field}`;

export default {
  Query: {
    users: async (_, args, { models: { User } }, info) => {
      const fields = info.fieldNodes[0]
        .selectionSet
        .selections
        .map(c => c.name.value);
      const setFields = new Set(fields);

      if (setFields.has('workspaces')) {
        setFields.delete('workspaces');

        return User
          .query()
          .allowEager('workspaces')
          .select(Array.from(setFields).map(parseField))
          .eager('workspaces');
      }

      return User
        .query()
        .select(fields.map(parseField));

    },
    user: (_, args, { models: { User } }, info) => {
      const { id } = args;

      return User
        .query()
        .where('id', id)
        .first()
        .eager('workspaces');
    },
    me: isAuthenticated((_, args, { models: { User } }) => {
      return User.query().first();
    })
  },
  Mutation: {
    signUp: async (_, args, { models: { User } }, info) => {
      const userData = args.input;

      try {
        const user = await User
          .query()
          .allowInsert('[username, email, password]')
          .insert(userData);
        const token = await user.generateJwt();

        return {
          ok: true,
          errors: null,
          user: {
            ...user,
            token,
          },
        };
      } catch (error) {
        return {
          user: null,
          ok: false,
          errors: [errorHandler(error)],
        };
      }
    },
    signIn: async (_, args, { models: { User, secret } }) => {
      const { input: { username, password } } = args;
      const user = await User
        .query()
        .where('username', username)
        .orWhere('email', username)
        .first();

      if (!user) {
        return {
          user: null,
          ok: false,
          errors: [{
            message: 'User not found',
            type: 'NotFound',
            code: 404,
          }],
        };
      }

      const isValid = await user.verifyPassword(password);

      if (!isValid) {
        return {
          user: null,
          ok: false,
          errors: [{
            message: 'Invalid password',
            type: 'AuthenticationError',
            code: 401,
          }]
        };
      }

      const token = await user.generateJwt();

      return {
        ok: true,
        user: {
          ...user,
          token,
        },
        errors: null,
      };
    },
  },
};
