const express = require('express');
const bodyParser = require('body-parser');

import type { Request, Response } from 'express'; // type-only import

const app = express();
app.use(bodyParser.json());

type CurrentUserResponse = {
  id: string;
  email: string;
};

app.get(
  '/api/users/currentuser',
  (req: Request, res: Response<CurrentUserResponse>) => {
    res.send({ id: '16690872', email: 'user@example.com' });
  }
);

const PORT = 3000;
app.listen(PORT, () => {
  const timestamp = new Date().toISOString();
  console.log(`AUTH ON ${PORT} bindaho`);
  console.log(`Express app started on port ${PORT} at ${timestamp}`);
});