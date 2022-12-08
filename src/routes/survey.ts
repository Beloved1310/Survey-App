import express from 'express';
import { isAdmin } from '../middleware/isAdmin';
import { asyncErrorhandling } from '../middleware/async';
import { auth } from '../middleware/auth';
import { createSurvey } from '../controller/Survey/createSurvey';

const router = express.Router();

router.post('/createsurvey', auth, isAdmin, asyncErrorhandling(createSurvey));

export default router;
