import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
const app = express();
const __dirname = path.resolve();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
export { app };
