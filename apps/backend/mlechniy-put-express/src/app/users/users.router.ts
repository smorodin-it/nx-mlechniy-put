import { apiRoutes } from '@nx-mlechniy-put/shared/api';
import { User } from '@prisma/client';
import express, { Request, Response } from 'express';
import { UserDto, UserIdParam } from './users.dto';
import {
  createUser,
  listUsers,
  retrieveUserByUuid,
  updateUser,
} from './users.service';

const userRouter = express.Router();

// List all users
userRouter.get(
  apiRoutes.users.list(),
  async (req: Request, res: Response<User[]>) => {
    const response = await listUsers();

    return res.json(response);
  }
);

// Retrieve user by uuid
userRouter.get(
  apiRoutes.users.retrieve(),
  async (req: Request<UserIdParam>, res: Response<User>) => {
    const { userId } = req.params;
    const response = await retrieveUserByUuid(userId);

    return res.json(response);
  }
);

// Create user
userRouter.post(
  apiRoutes.users.create(),
  async (req: Request<unknown, unknown, UserDto>, res: Response) => {
    const userData = req.body;
    const response = await createUser(userData);

    return res.json(response);
  }
);

// Update user
userRouter.put(
  apiRoutes.users.update(),
  async (req: Request<UserIdParam, unknown, UserDto>, res: Response) => {
    const { userId } = req.params;
    const userData = req.body;

    const response = await updateUser(userId, userData);

    return res.json(response);
  }
);

// Delete user
userRouter.delete(
  apiRoutes.users.delete(),
  async (req: Request, res: Response) => {
    const response = await listUsers();

    return res.json(response);
  }
);

export default userRouter;
