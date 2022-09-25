import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors'
import {router} from './routes/index.js'

const app: Express = express();
const __dirname = path.resolve();
dotenv.config();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router)


export { app };