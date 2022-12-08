import express from 'express';
import { asyncErrorhandling } from '../middleware/async';
import { auth } from '../middleware/auth';
import { createResponse } from '../controller/Survey/reponses';
import { getSurveyResponse } from '../controller/Survey/getSurveyResponse';
import { isAdmin } from '../middleware/isAdmin';

const router = express.Router();

router.get(
  '/surveyresponse',
  auth,
  isAdmin,
  asyncErrorhandling(getSurveyResponse)
);
router.post(
  '/createsurveyresponse/:id',
  auth,
  asyncErrorhandling(createResponse)
);

export default router;
