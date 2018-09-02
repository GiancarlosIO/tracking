import { Workspace } from '../../models';
import isAuthenticated from './resolverMiddlewares/isAuthenticated';

export default {
  Query: {
    workspaces: () => Workspace.query()
  },
};