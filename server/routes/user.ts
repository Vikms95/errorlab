import express from 'express'
import { User } from '../models/user'
const router = express.Router()

// router.get('/users', function (req, res, next) {
//   User.count
//   res.json({ message: 'hey user' })
// })

router.get('/users', async function (req, res, next) {
  const user = await User.create({username: 'test1', password:'12345', projects:['hello','bye']})
  res.json({user: user})
})

export { router as userRouter }
