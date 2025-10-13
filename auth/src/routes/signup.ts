import express, { Request, Response } from 'express';
import { body } from 'express-validator';

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
    const { email, password } = req.body;

    res.send(`Hello from signUp POST handler!\nEmail: ${email}\nPassword: ${password}`);
  }
);

export { router as SignUpRouter };