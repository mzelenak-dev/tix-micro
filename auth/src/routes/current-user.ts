import express, { Request, Response } from 'express';

const router = express.Router();

router.get(
  '/api/users/currentuser',
  (req: Request, res: Response) => {
    res.send('Hello from current-user GET handler, you jive turkey!');
  }
);

export { router as CurrentUserRouter };