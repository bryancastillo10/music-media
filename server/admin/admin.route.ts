import express from "express";

import { protectRoute } from "@/auth/auth.config";
import { verifyAdmin } from "@/infrastructure/middleware/verifyAdmin.middleware";

import { adminController } from "@/admin/admin.config";

const router = express.Router();

router.post("/songs",protectRoute, verifyAdmin, adminController.createSong);
router.delete("/songs/:id", protectRoute,verifyAdmin, adminController.deleteSong);

router.post("/albums",protectRoute,verifyAdmin,  adminController.createAlbum);
router.delete("/albums/:id", protectRoute,verifyAdmin, adminController.deleteAlbum);

export default router;