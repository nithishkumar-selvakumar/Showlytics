import Router from '@koa/router';
import { getAllUsers, createUser } from '../controllers/user.controller.js';

const router = new Router();

router.get('/', getAllUsers);
router.post('/', createUser);

export default router;
