const express = require('express');
const bodyParser = require('body-parser');

import type { Request, Response } from 'express'; // ✅ Type-only import

const app = express();
app.use(bodyParser.json());

type CurrentUserResponse = {
  id: string;
  email: string;
};

app.get(
  '/api/users/currentuser',
  (req: Request, res: Response<CurrentUserResponse>) => {
    res.send({ id: '123', email: 'user@example.com' });
  }
);

app.listen(3000, () => {
  console.log('AUTH ON 3000');
});