import express from 'express'
import { User } from '../models/user.js'
const router = express.Router()

router.get('/users', async function (req, res, next) {
  const users = await User.findAll({})
  res.json({ users, message: "HELLO WORLD FROM HOSTEMPLO" })
})

router.post('/users', async function (req, res, next) {
  const user = await User.create({
    username: 'test1',
    password: '12345',
    projects: 'hello',
  })
  res.json({ user: user })
})

export { router as userRouter }
