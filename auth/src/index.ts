const PORT = 3000;
const express = require('express');
const bodyParser = require('body-parser');

import { SignInRouter } from './routes/signin';
import { SignUpRouter } from './routes/signup';
import { SignOutRouter } from './routes/signout';
import { CurrentUserRouter } from './routes/current-user';

const app = express();

app.use(
  SignInRouter,
  SignUpRouter,
  SignOutRouter,
  CurrentUserRouter,
  bodyParser.json(),
);

app.listen(PORT, () => {
  console.log(`AUTH ON ${PORT} bindaho`);
  console.log(`Express app started on port ${PORT} at ${new Date().toLocaleDateString()}`);
});