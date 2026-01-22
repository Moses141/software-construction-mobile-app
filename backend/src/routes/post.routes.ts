import { Router } from 'express';
import { PostController } from '../controllers/post.controller';
import { authenticateToken } from '../middleware/auth.middleware';

const router = Router();

// Protected Routes
router.post('/', authenticateToken, (req, res) => PostController.createPost(req as any, res));
router.get('/', (req, res) => PostController.getFeed(req as any, res)); // Feed can be public or protected, making public-ish for now or optional auth

export default router;
