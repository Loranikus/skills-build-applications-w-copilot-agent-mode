import 'dotenv/config';
import { connectToDatabase, disconnectFromDatabase } from '../config/database';
import {
  ActivityModel,
  LeaderboardEntryModel,
  TeamModel,
  UserModel,
  WorkoutModel,
} from '../models';

async function seed(): Promise<void> {
  console.log('Seed the octofit_db database with test data');

  await connectToDatabase(5000);

  await Promise.all([
    UserModel.deleteMany({}),
    TeamModel.deleteMany({}),
    ActivityModel.deleteMany({}),
    LeaderboardEntryModel.deleteMany({}),
    WorkoutModel.deleteMany({}),
  ]);

  const teams = await TeamModel.insertMany([
    {
      name: 'Velocity Vipers',
      motto: 'Fast miles, steady smiles.',
      memberCount: 3,
      weeklyGoalMinutes: 900,
    },
    {
      name: 'Core Crusaders',
      motto: 'Stronger every circuit.',
      memberCount: 3,
      weeklyGoalMinutes: 720,
    },
    {
      name: 'Trail Blazers',
      motto: 'Fresh air, full effort.',
      memberCount: 2,
      weeklyGoalMinutes: 600,
    },
  ]);

  await UserModel.insertMany([
    {
      username: 'mona-fit',
      displayName: 'Mona Patel',
      email: 'mona@example.com',
      team: teams[0].name,
      fitnessGoal: 'Run a spring 10K under 55 minutes',
    },
    {
      username: 'alex-lift',
      displayName: 'Alex Rivera',
      email: 'alex@example.com',
      team: teams[1].name,
      fitnessGoal: 'Build consistent full-body strength',
    },
    {
      username: 'sam-steps',
      displayName: 'Sam Chen',
      email: 'sam@example.com',
      team: teams[2].name,
      fitnessGoal: 'Average 12,000 daily steps',
    },
    {
      username: 'jamie-cycle',
      displayName: 'Jamie Morgan',
      email: 'jamie@example.com',
      team: teams[0].name,
      fitnessGoal: 'Complete a 50-mile cycling event',
    },
  ]);

  await ActivityModel.insertMany([
    {
      username: 'mona-fit',
      type: 'running',
      durationMinutes: 42,
      caloriesBurned: 410,
      completedAt: new Date('2026-05-20T12:30:00Z'),
    },
    {
      username: 'alex-lift',
      type: 'strength training',
      durationMinutes: 55,
      caloriesBurned: 360,
      completedAt: new Date('2026-05-21T22:15:00Z'),
    },
    {
      username: 'sam-steps',
      type: 'walking',
      durationMinutes: 70,
      caloriesBurned: 300,
      completedAt: new Date('2026-05-22T17:45:00Z'),
    },
    {
      username: 'jamie-cycle',
      type: 'cycling',
      durationMinutes: 65,
      caloriesBurned: 620,
      completedAt: new Date('2026-05-23T14:00:00Z'),
    },
  ]);

  await LeaderboardEntryModel.insertMany([
    {
      username: 'jamie-cycle',
      rank: 1,
      points: 1840,
      streakDays: 18,
    },
    {
      username: 'mona-fit',
      rank: 2,
      points: 1715,
      streakDays: 14,
    },
    {
      username: 'alex-lift',
      rank: 3,
      points: 1490,
      streakDays: 10,
    },
    {
      username: 'sam-steps',
      rank: 4,
      points: 1325,
      streakDays: 9,
    },
  ]);

  await WorkoutModel.insertMany([
    {
      name: 'Morning Mobility Reset',
      focusArea: 'mobility',
      difficulty: 'beginner',
      durationMinutes: 20,
      equipment: ['yoga mat'],
    },
    {
      name: 'Tempo Run Builder',
      focusArea: 'cardio',
      difficulty: 'intermediate',
      durationMinutes: 45,
      equipment: ['running shoes'],
    },
    {
      name: 'Full-Body Dumbbell Circuit',
      focusArea: 'strength',
      difficulty: 'intermediate',
      durationMinutes: 40,
      equipment: ['dumbbells', 'bench'],
    },
    {
      name: 'Climb Simulation Ride',
      focusArea: 'cycling endurance',
      difficulty: 'advanced',
      durationMinutes: 60,
      equipment: ['bike', 'trainer'],
    },
  ]);

  console.log('Seed complete: users, teams, activities, leaderboard, and workouts created.');
}

seed()
  .catch((error) => {
    console.error('Seed failed:', error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await disconnectFromDatabase();
  });
