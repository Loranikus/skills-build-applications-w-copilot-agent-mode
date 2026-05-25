import { Schema, model } from 'mongoose';

export interface Workout {
  name: string;
  focusArea: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  durationMinutes: number;
  equipment: string[];
}

const workoutSchema = new Schema<Workout>(
  {
    name: { type: String, required: true },
    focusArea: { type: String, required: true },
    difficulty: { type: String, required: true, enum: ['beginner', 'intermediate', 'advanced'] },
    durationMinutes: { type: Number, required: true },
    equipment: { type: [String], required: true },
  },
  { timestamps: true },
);

export const WorkoutModel = model<Workout>('Workout', workoutSchema);
