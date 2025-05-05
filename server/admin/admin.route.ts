import express from "express";
import { protectRoute } from "@/auth/auth.config";

const router = express.Router();

router.get("/check", ()=>{});

router.post("/songs",protectRoute, ()=>{});
router.delete("/songs/:id", protectRoute,()=>{});

router.post("/albums",protectRoute, ()=>{});
router.delete("/albums/:id", protectRoute,()=>{});