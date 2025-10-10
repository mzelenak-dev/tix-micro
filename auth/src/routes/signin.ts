const express = require('express');

import type { Request, Response } from 'express';

const router = express.Router();

router.post(
  '/api/users/signin',
  (req: Request, res: Response<String>) => {
    res.send('Hello from signIn POST handler!');
  }
);

export { router as SignInRouter };