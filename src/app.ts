import * as dotenv from 'dotenv';
dotenv.config();

import express, {json} from 'express';
import "express-async-errors";
import 'reflect-metadata';
import apiRateLimiter from './middleware/rateLimit';

import numbersRoutes from './routes/numberRoutes';
import { errorHandler } from "./middleware/errors";

const app = express();

app.use(express.json());

app.use('/api', apiRateLimiter, numbersRoutes);

app.use(errorHandler);

export default app;
