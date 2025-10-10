const express = require('express');

import type { Request, Response } from 'express';

const router = express.Router();

router.post(
  '/api/users/signup',
  (req: Request, res: Response<String>) => {
    res.send('Hello from signUp POST handler!');
  }
);

export { router as SignUpRouter };