import 'express-async-errors';
import express from 'express';
import { SignInRouter } from './routes/signin';
import { SignUpRouter } from './routes/signup';
import { SignOutRouter } from './routes/signout';
import { CurrentUserRouter } from './routes/current-user';
import { errorHandler } from './middlewares/error-handler';

const PORT = 3000;
const app = express();

app.use(express.json());

app.use(SignInRouter);
app.use(SignUpRouter);
app.use(SignOutRouter);
app.use(CurrentUserRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  const now = new Date();
  console.log(`${now.toLocaleDateString()} ${now.toLocaleTimeString()}: AUTH SERVICE RUNNING ON PORT ${PORT}`);
});