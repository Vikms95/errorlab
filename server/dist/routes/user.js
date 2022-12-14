var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import { User } from '../models/user.js';
const router = express.Router();
router.get('/users', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield User.findAll({});
        res.json({ users, message: "HELLO WORLD FROM HOSTEMPLO" });
    });
});
router.post('/users', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield User.create({
            username: 'test1',
            password: '12345',
            projects: 'hello',
        });
        res.json({ user: user });
    });
});
export { router as userRouter };
