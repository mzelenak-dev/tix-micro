import { Request, Response, NextFunction } from 'express';
import { DatabaseConnectionError } from '../errors/database-connection-error';
import { RequestValidationError } from '../errors/request-validation-error';

export const errorHandler = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error('Something went wrong:', error);

  if (error instanceof RequestValidationError) {
    console.log('This is a request validation error');

    const formattedErrors = error.errors
      .filter((err) => err.type === 'field')
      .map((err) => ({
        message: err.msg,
        field: err.path,
      }));

    return res.status(400).send({ errors: formattedErrors });
  }

  if (error instanceof DatabaseConnectionError) {
    console.log('This is a database connection error');
    return res.status(500).send({ message: 'Database connection error' });
  }

  // fallback for unknown errors
  if (error instanceof Error) {
    return res.status(400).send({ message: error.message });
  }

  res.status(400).send({ message: 'Something went wrong' });
};