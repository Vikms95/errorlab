import express from 'express';
const router = express.Router();
router.get('/users', function (req, res, next) {
    res.json({ message: 'hey user' });
});
export { router as usersRouter };
