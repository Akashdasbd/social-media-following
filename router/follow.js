import express from 'express';
import { createFollow, getAllFollows } from '../controllers/FollowController.js';
// router initialization
const route = express.Router();
route.get('/',getAllFollows)
route.post('/',createFollow)
// export all controllers
export default route;