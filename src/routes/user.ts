import express from 'express';
import { asyncErrorhandling } from '../middleware/async';
import { auth } from '../middleware/auth';
import { signUp } from '../controller/user/signUp';
import { signIn } from '../controller/user/signIn';

const router = express.Router();

router.post('/signup', asyncErrorhandling(signUp));

router.post('/signin', asyncErrorhandling(signIn));

export default router;
