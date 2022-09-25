import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { database } from './config/database.js';
import { indexRouter } from './routes/index.js';
import { userRouter } from './routes/user.js';
database.authenticate()
    .then(() => console.log('Database connected'))
    .catch((err) => console.log('Error ', err));
const app = express();
const __dirname = path.resolve();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', indexRouter);
app.use('/api', userRouter);
export { app };
