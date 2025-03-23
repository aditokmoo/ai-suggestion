import express from 'express'
import { getAISuggestion } from '../controller/ShoppingController.js';

const router = express.Router();

router.post('/ai-suggestion', getAISuggestion)

export default router;