const {
  ValidationError,
  NotFoundError
} = require('objection');

const {
  DBError,
  ConstraintViolationError,
  UniqueViolationError,
  NotNullViolationError,
  ForeignKeyViolationError,
  CheckViolationError,
  DataError
} = require('objection-db-errors');

export const errorHandler = (err) => {
  if (err instanceof ValidationError) {
    switch (err.type) {
      case 'ModelValidation':
        return {
          message: err.message,
          type: 'ModelValidation',
          data: {
            ...err.data,
            columns: err.data.columns || Object.keys(err.data),
          },
          code: 400,
        };
      case 'RelationExpression':
        return {
          message: err.message,
          type: 'InvalidRelationExpression',
          data: {},
          code: 400,
        };
      case 'UnallowedRelation':
        return {
          message: err.message,
          type: 'UnallowedRelation',
          data: {},
          code: 400,
        };
      case 'InvalidGraph':
        return {
          message: err.message,
          type: 'InvalidGraph',
          data: {},
          code: 400,
        };
      default:
        return {
          message: err.message,
          type: 'UnknownValidationError',
          data: {},
          code: 400,
        };
    }
  } else if (err instanceof NotFoundError) {
    return {
      message: err.message,
      type: 'NotFound',
      data: {},
      code: 400,
    };
  } else if (err instanceof UniqueViolationError) {
    return {
      message: err.message,
      type: 'UniqueViolation',
      data: {
        columns: err.columns,
        table: err.table,
        constraint: err.constraint
      },
      code: 400,
    };
  } else if (err instanceof NotNullViolationError) {
    return {
      message: err.message,
      type: 'NotNullViolation',
      data: {
        column: err.column,
        table: err.table,
      },
      code: 400,
    };
  } else if (err instanceof ForeignKeyViolationError) {
    return {
      message: err.message,
      type: 'ForeignKeyViolation',
      data: {
        table: err.table,
        constraint: err.constraint
      },
      code: 400,
    };
  } else if (err instanceof CheckViolationError) {
    return {
      message: err.message,
      type: 'CheckViolation',
      data: {
        table: err.table,
        constraint: err.constraint
      },
      code: 400,
    };
  } else if (err instanceof DataError) {
    return {
      message: err.message,
      type: 'InvalidData',
      data: {},
      code: 400,
    };
  } else if (err instanceof DBError) {
    return {
      message: err.message,
      type: 'UnknownDatabaseError',
      data: {},
      code: 500,
    };
  } else {
    return {
      message: err.message,
      type: 'UnknownError',
      data: {},
      code: 500,
    };
  }
}