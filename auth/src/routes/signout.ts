import express from 'express';

import type { Request, Response } from 'express';

const router = express.Router();

router.post(
  '/api/users/signout',
  (req: Request, res: Response) => {
    res.send('Hello from signOut POST handler!');
  }
);

export { router as SignOutRouter };