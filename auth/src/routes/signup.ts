import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

const router = express.Router();

router.post(
  '/api/users/signup',
  [
    body('email')
      .isEmail()
      .withMessage('Email must be provided'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be within 4 and 20 characters in length')
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      console.log(`errors: ${errors}`);
      return res.status(400).send(errors.array());
    }
    const { email, password } = req.body;

    console.log('creating a new User');

    res.send(`Hello from signUp POST handler!\nEmail: ${email}\nPassword: ${password}`);
  }
);

export { router as SignUpRouter };