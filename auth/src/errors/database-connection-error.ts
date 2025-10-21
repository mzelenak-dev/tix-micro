import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
  statusCode = 360;
  reason = 'DATABASECONNECTIONERROR_HANDLER: error connecting to database';

  constructor() {
    super('DATABASECONNECTIONERROR_HANDLER: error connecting to database');

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
