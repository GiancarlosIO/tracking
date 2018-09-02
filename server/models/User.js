import objection from 'objection';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotevn from 'dotenv';
import Model from './config';

dotevn.config();

const pattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

class User extends Model {
  static tableName = 'users';

  static idColumn = 'id';

  static jsonSchema = {
    type: 'object',
    required: ['username', 'email', 'password'],

    properties: {
      username: { type: 'string', minLength: 6, maxLenght: 30 },
      email: { type: 'string', minLength: 6, maxLenght: 30 },
      password: { type: 'string', minLength: 6, maxLenght: 255 },
    },
  };

  static relationMappings = {
    workspaces: {
      relation: Model.ManyToManyRelation,
      modelClass: __dirname + '/Workspace',
      join: {
        from: 'users.id',
        through: {
          modelClass: __dirname + '/UserWorkspace',
          from: 'users_workspaces.user_id',
          to: 'users_workspaces.workspace_id',
        },
        to: 'workspaces.id',
      },
    },
  };

  // instance methods
  $beforeInsert(queryContext) {
    const maybePromise = super.$beforeInsert(queryContext);

    this.validateEmail();

    return Promise.resolve(maybePromise).then(() => {
      return this.generatePassword();
    });
  }

  // custom methods
  generatePassword() {
    const password = this.password;

    return bcrypt.hash(password, 12)
      .then((hash) => {
        this.password = hash;
      });
  }

  verifyPassword(password) {
    return bcrypt.compare(password, this.password);
  }

  generateJwt(data) {
    return new Promise((resolve, reject) => {
      jwt.sign(
        {
          email: this.email,
          username: this.username,
        },
        process.env.SECRET_KEY,
        {
          expiresIn: '2 days',
        },
        (err, token) => {
          if (err) return reject(errr);
          return resolve(token);
        }
      );
    });
  }

  verifyToken(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
        if (err) return reject(err);
        return resolve(payload);
      });
    });
  }

  validateEmail() {
    if (!pattern.test(this.email)) {
      throw new objection.ValidationError({
        message: 'Invalid email',
        type: 'ModelValidation',
        data: {
          table: 'users',
          columns: ['email'],
        },
      });
    }
  }
}

export default User;