import express from 'express';
const router = express.Router();
router.get('/', function (req, res, next) {
    res.json({ message: "hey index" });
});
export { router as indexRouter };
