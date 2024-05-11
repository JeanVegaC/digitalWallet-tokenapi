import express from 'express';
import { getToken } from '../application/controllers/tokenController.js';
const app = express();

app.post('/', getToken);

export default app;