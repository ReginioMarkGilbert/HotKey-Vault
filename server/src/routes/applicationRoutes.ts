import express from 'express';
import { shortcutController } from '../controllers/shortcutController';

const router = express.Router();

router.get('/shortcuts', shortcutController.getShortcuts);
router.post('/shortcuts', shortcutController.saveShortcuts);

export default router;