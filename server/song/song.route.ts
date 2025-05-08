import express from "express";

import { protectRoute } from "@/auth/auth.config";
import { verifyAdmin } from "@/infrastructure/middleware/verifyAdmin.middleware";

import { songController } from "@/song/song.config";

const router = express.Router();

router.get("/", protectRoute, verifyAdmin, songController.fetchAllSongs);

router.get("/featured", protectRoute, songController.fetchFeatured);
router.get("/my-playlist", protectRoute, songController.fetchMyPlaylist);
router.get("/trending", protectRoute, songController.fetchTrending);

export default router;