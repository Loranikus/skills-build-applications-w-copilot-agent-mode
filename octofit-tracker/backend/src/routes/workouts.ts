import { Router } from 'express';
import { WorkoutModel } from '../models';

export const workoutsRouter = Router();

workoutsRouter.get('/', async (_request, response, next) => {
  try {
    const workouts = await WorkoutModel.find().sort({ difficulty: 1, name: 1 });
    response.json(workouts);
  } catch (error) {
    next(error);
  }
});
