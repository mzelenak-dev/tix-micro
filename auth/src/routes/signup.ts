import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/request-validation-error';
import { DatabaseConnectionError } from '../errors/database-connection-error';

const router = express.Router();

router.post(
  '/api/users/signup',
  [
    body('email').isEmail()
      .withMessage('Email must be provided'),
    body('password').trim().isLength({ min: 4, max: 20 })
      .withMessage('Password must be within 4 and 20 characters in length')
  ],
  (req: Request, res: Response) => {
    const { email, password } = req.body;
    const errors = validationResult(req);
    
    if(!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }

    // console.log(`Hello from signUp POST handler!\nEmail: ${email}\nPassword: ${password}`);
    res.status(201).send({ message: 'User created' });
    // res.send(`Hello from signUp POST handler!\nEmail: ${email}\nPassword: ${password}`);
  }
);

export { router as SignUpRouter };