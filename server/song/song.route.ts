import express from "express";

import { protectRoute } from "@/auth/auth.config";

const router = express.Router();

router.get("/", protectRoute, ()=> {});

router.get("/featured", ()=> {});
router.get("/my-playlist", ()=> {});
router.get("/trending", ()=> {});

export default router;