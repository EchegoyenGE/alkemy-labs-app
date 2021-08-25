import Router from 'express'
const router = Router();

import { checkToken } from './middlewares';
import operationsRouter from './api/operations';
import usersRouter from './api/users';

router.use('/operations', checkToken, operationsRouter)
router.use('/users', usersRouter)

export default router