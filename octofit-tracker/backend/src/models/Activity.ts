import { Schema, model } from 'mongoose';

export interface Activity {
  username: string;
  type: string;
  durationMinutes: number;
  caloriesBurned: number;
  completedAt: Date;
}

const activitySchema = new Schema<Activity>(
  {
    username: { type: String, required: true },
    type: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    caloriesBurned: { type: Number, required: true },
    completedAt: { type: Date, required: true },
  },
  { timestamps: true },
);

export const ActivityModel = model<Activity>('Activity', activitySchema);
