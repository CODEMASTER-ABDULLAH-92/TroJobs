import express from 'express'
import { createPost } from '../Controllers/job.contoller.js'

const router = express.Router();
router.post('/posts',createPost);
export default router;