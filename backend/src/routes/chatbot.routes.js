import express from 'express';
import { chatBotResponse } from '../controllers/chatbot.controller.js';

const router = express.Router();

// Endpoint del chatbot
router.post('/chatbot', chatBotResponse);

export default router;
