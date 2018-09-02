import Model from './config';

class Workspace extends Model {
  static tableName = 'workspaces';

  static idColumn = 'id';

  static relationMappings = {
    users: {
      relation: Model.ManyToManyRelation,
      modelClass: __dirname + '/User',
      join: {
        from: 'workspaces.id',
        to: 'users.id',
        through: {
          modelClass: __dirname + '/UserWorkspace',
          from: 'users_workspaces.workspace_id',
          to: 'users_workspaces.user_id',
        },
      },
    },
  }
}

export default Workspace;
