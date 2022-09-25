import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import path from 'path';

const app: Express = express();
const __dirname = path.resolve();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

export { app };