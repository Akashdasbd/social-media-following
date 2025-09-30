import express from 'express';
import { createUser, getAllUsers, getUserProfile } from '../controllers/UserController.js';

// express router initialization

const router =express.Router();


// define routes
router.get('/',getAllUsers);
router.get('/:id',getUserProfile)
router.post('/',createUser)

// export router to use in server.js
export default router;