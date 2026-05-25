import { Schema, model } from 'mongoose';

export interface User {
  username: string;
  displayName: string;
  email: string;
  team: string;
  fitnessGoal: string;
}

const userSchema = new Schema<User>(
  {
    username: { type: String, required: true, unique: true },
    displayName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    team: { type: String, required: true },
    fitnessGoal: { type: String, required: true },
  },
  { timestamps: true },
);

export const UserModel = model<User>('User', userSchema);
