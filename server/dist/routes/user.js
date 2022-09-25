import express from 'express';
import { User } from '../models/user';
const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const router = express.Router();
// router.get('/users', function (req, res, next) {
//   User.count
//   res.json({ message: 'hey user' })
// })
router.get('/users', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield User.create({ username: 'test1', password: '12345', projects: ['hello', 'bye'] });
        res.json({ user });
    });
});
export { router as userRouter };
