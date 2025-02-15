import express from 'express'
import { createPost, ListPost } from '../Controllers/job.contoller.js'

const router = express.Router();
router.post('/addPost',createPost);
router.get('/listing',ListPost);
export default router;