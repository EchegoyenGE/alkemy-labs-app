import { Router } from 'express';
const router = Router();

import { check } from 'express-validator';
import { registerUser, loginUser } from '../../controllers/user.controller'

router.post('/register', [
    check('username', 'username is required').not().isEmpty(),
    check('password', 'password is required').not().isEmpty(),
    check('email', 'email must be valid').isEmail()
], registerUser)

router.post('/login', loginUser)

export default router