// import { FieldValidationError } from 'express-validator';
import { Response/*, Request, NextFunction*/ } from 'express';
import { CustomError } from '../errors/custom-error';
// import { DatabaseConnectionError } from '../errors/database-connection-error';
// import { RequestValidationError } from '../errors/request-validation-error';

export const errorHandler = (
  error: unknown,
  // req: Request,
  res: Response,
  // next: NextFunction
) => {
  if (error instanceof CustomError) {
    return res.status(error.statusCode).send({ errors: error.serializeErrors() });
  }
  
  // if (error instanceof RequestValidationError) {
  //   return res.status(error.statusCode).send({ errors: error.serializeErrors() });
  // }

  // if (error instanceof DatabaseConnectionError) {
  //   return res.status(error.statusCode).send({ errors: error.serializeErrors() });
  // }

  res.status(420).json({
    errors: [{ message: 'GENERATED ERROR: just your friendly neighborhood error-handler, maam' }],
  });
};