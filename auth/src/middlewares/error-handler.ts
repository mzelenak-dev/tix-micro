import { FieldValidationError } from 'express-validator';
import { Response/*, Request, NextFunction*/ } from 'express';
import { DatabaseConnectionError } from '../errors/database-connection-error';
import { RequestValidationError } from '../errors/request-validation-error';

export const errorHandler = (
  error: unknown,
  // req: Request,
  res: Response,
  // next: NextFunction
) => {
  console.error(`GENERATED ERROR: ${error}`);

  if (error instanceof RequestValidationError) {
    console.log('GENERATED ERROR: This is a request validation error');

    const formattedErrors = error.serializeErrors();
    return res.status(400).send({ errors: formattedErrors });
    // const formattedErrors = error.errors
    //   .filter((err): err is FieldValidationError => err.type === 'field')
    //   .map((err) => ({
    //     message: err.msg,
    //     field: err.path,
    //   }));

    // return res.status(400).send({ errors: formattedErrors });
  }

  if (error instanceof DatabaseConnectionError) {
    console.log('This is a database connection error');
    return res.status(500).send({ message: 'GENERATED ERROR: Database connection error' });
  }

  if (error instanceof Error) {
    return res.status(400).send({ message: `GENERATED ERROR: ${error.message}` });
  }

  res.status(720).send({
    errors: [{ message: 'GENERATED ERROR: SOMETHING WENT WRONG' }],
  });
};