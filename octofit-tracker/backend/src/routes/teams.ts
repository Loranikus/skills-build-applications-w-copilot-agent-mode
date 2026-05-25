import { Router } from 'express';
import { TeamModel } from '../models';

export const teamsRouter = Router();

teamsRouter.get('/', async (_request, response, next) => {
  try {
    const teams = await TeamModel.find().sort({ name: 1 });
    response.json(teams);
  } catch (error) {
    next(error);
  }
});
