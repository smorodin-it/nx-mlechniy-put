import express from 'express';
import helmet from 'helmet';
import userRouter from './app/users/users.router';

const app = express();

// Middlewares
app.use(helmet());
app.use(express.json());

// User router
app.use('/api/v1', userRouter);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
