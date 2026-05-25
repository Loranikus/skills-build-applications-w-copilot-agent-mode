import { Router } from 'express';
import { LeaderboardEntryModel } from '../models';

export const leaderboardRouter = Router();

leaderboardRouter.get('/', async (_request, response, next) => {
  try {
    const leaderboard = await LeaderboardEntryModel.find().sort({ rank: 1 });
    response.json(leaderboard);
  } catch (error) {
    next(error);
  }
});
