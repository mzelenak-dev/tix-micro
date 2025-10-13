import { Request, Response, NextFunction } from 'express';
import { DatabaseConnectionError } from '../errors/database-connection-error';
import { RequestValidationError } from '../errors/request-validation-error';

export const errorHandler = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('something went wrong', error);
  if (error instanceof RequestValidationError) {
    console.log('this is a req validation error');
  }
  if (error instanceof DatabaseConnectionError) {
    console.log('this is a database connection error');
  }

  res.status(400).send({
    message: 'Something went wrong'
  });
};