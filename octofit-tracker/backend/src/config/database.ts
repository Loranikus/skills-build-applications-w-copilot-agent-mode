import mongoose from 'mongoose';
import { mongoUri } from '../config';

mongoose.set('bufferCommands', false);

export async function connectToDatabase(serverSelectionTimeoutMS = 2000): Promise<typeof mongoose> {
  return mongoose.connect(mongoUri, {
    dbName: 'octofit_db',
    serverSelectionTimeoutMS,
  });
}

export async function disconnectFromDatabase(): Promise<void> {
  await mongoose.disconnect();
}
