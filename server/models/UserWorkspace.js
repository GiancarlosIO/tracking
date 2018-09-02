import Model from './config';
import { dirname } from 'path';

class UserWorkspace extends Model {
  static tableName = 'users_workspaces';

  static idColumn = 'id';

  static relationMappings = {
    users: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + '/User',
      join: {
        from: 'users_workspaces.user_id',
        to: 'user.id'
      },
    },
    workspaces: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + '/Workspace',
      join: {
        from: 'users_workspaces.workspace_id',
        to: 'workspace.id',
      },
    },
  };
};

export default UserWorkspace;
