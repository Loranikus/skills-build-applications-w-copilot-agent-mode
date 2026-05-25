import { Router } from 'express';
import { UserModel } from '../models';

export const usersRouter = Router();

usersRouter.get('/', async (_request, response, next) => {
  try {
    const users = await UserModel.find().sort({ username: 1 });
    response.json(users);
  } catch (error) {
    next(error);
  }
});
