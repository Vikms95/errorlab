import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import path from 'path'
import cors from 'cors'
import { indexRouter } from './routes/index.js'
import { usersRouter } from './routes/users.js'

const app: Express = express()
const __dirname = path.resolve()
dotenv.config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', indexRouter)
app.use('/api', usersRouter)

export { app }
