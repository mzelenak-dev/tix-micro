import express from 'express';
import 'express-async-errors';
import mongoose from 'mongoose';

import { SignInRouter } from './routes/signin';
import { SignUpRouter } from './routes/signup';
import { SignOutRouter } from './routes/signout';
import { CurrentUserRouter } from './routes/current-user';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const PORT = 3000;
const app = express();

app.use(express.json());

app.use(SignInRouter);
app.use(SignUpRouter);
app.use(SignOutRouter);
app.use(CurrentUserRouter);

// catch-all for anything not defined
app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

const start = async () => {
  // connect string from ./infra/k8s/auth-mongo-depl.yaml service definition metadata.name & port
  // db name ("auth") after port means mongoose will create db at service start
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
    console.log('Connected to DB');
  } catch(error) {
    console.error(error);
  }

  app.listen(PORT, () => {
    const now = new Date();
    console.log(`${now.toLocaleDateString()} ${now.toLocaleTimeString()}: AUTH SERVICE RUNNING ON PORT ${PORT}`);
  });
};

start();