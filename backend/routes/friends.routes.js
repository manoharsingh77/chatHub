import express from 'express';
import {
  sendFriendRequest,
  acceptFriendRequest,
  rejectFriendRequest,
  getFriendRequests,
  getFriends,
} from "../controllers/friend.controller.js";
import protectRoute from '../middleware/protectRoute.js';
const router = express.Router();

router.post("/request/:username", protectRoute, sendFriendRequest);
router.post("/accept/:id", protectRoute, acceptFriendRequest);
router.post("/reject/:id", protectRoute, rejectFriendRequest);
router.get("/requests", protectRoute, getFriendRequests);
router.get("/", protectRoute, getFriends);

export default router;