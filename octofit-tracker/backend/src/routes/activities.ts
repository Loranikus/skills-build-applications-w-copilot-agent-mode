import { Router } from 'express';
import { ActivityModel } from '../models';

export const activitiesRouter = Router();

activitiesRouter.get('/', async (_request, response, next) => {
  try {
    const activities = await ActivityModel.find().sort({ completedAt: -1 });
    response.json(activities);
  } catch (error) {
    next(error);
  }
});
