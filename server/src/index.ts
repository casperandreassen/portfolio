import express from 'express';
import dotenv from 'dotenv';
import { connectToDatabase } from './databaseConnection';
import { projectRouter } from './routes/project.route';
import { contactRouter } from './routes/contact.route';
import Logger from './utils/logger';
import { authRouter } from './routes/auth.route';
dotenv.config();

const HOST = process.env.HOST || 'http://localhost';
const PORT = parseInt(process.env.PORT || '4500');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/v1/content', projectRouter());
app.use('/api/v1/email', contactRouter());
app.use('/api/v1/auth', authRouter());

app.listen(PORT, async () => {
  await connectToDatabase();
  Logger.info(`Application started on URL ${HOST}:${PORT} 🎉`);
});
