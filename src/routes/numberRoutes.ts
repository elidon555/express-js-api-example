import { Router } from 'express';
import { numbersController } from '../controllers/numbersController';

const router = Router();

router.post('/numbers', numbersController);

export default router;