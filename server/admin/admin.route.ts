import express from "express";
import { protectRoute } from "@/auth/auth.config";
import { adminController } from "@/admin/admin.config";

const router = express.Router();

router.get("/check", ()=>{});

router.post("/songs",protectRoute, adminController.createSong);
router.delete("/songs/:id", protectRoute,adminController.deleteSong);

router.post("/albums",protectRoute, adminController.createAlbum);
router.delete("/albums/:id", protectRoute,adminController.deleteAlbum);

export default router;