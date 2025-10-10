const express = require('express');

import type { Request, Response } from 'express';

const router = express.Router();

router.get(
  '/api/users/currentuser',
  (req: Request, res: Response<String>) => {
    res.send('Hello from current-user GET handler!');
  }
);

export { router as CurrentUserRouter };