export class DatabaseConnectionError extends Error {
  public reason: string;

  constructor() {
    super('Error connecting to database');
    this.reason = 'Error connecting to database';

    // Fix prototype chain for TypeScript
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
}