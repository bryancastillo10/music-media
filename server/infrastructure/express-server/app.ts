import express from "express";
import cors from "cors";

import cookieParser from "cookie-parser";
import { helmetConfig } from "@/utils/helmet";
import { errorHandler } from "@/infrastructure/middleware/errorHandler.middleware";
import { fileUploadMiddleware } from "@/infrastructure/middleware/upload.middleware";

import authRoutes from "@/auth/auth.route";
import adminRoutes from "@/admin/admin.route";
import songRoutes from "@/song/song.route";

export const startApp = () => {
	const app = express();

    // Security Middleware
    app.use(helmetConfig);
    app.use(cors({
        origin: "http://localhost:5173",
        credentials: true
    }));
    app.use(fileUploadMiddleware);
    
    // Body Parser Middleware
    app.use(cookieParser());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    // Core Routes
    app.use("/api/auth", authRoutes);
    app.use("/api/admin", adminRoutes);
    app.use("/api/song", songRoutes);
    

    // Serve React Client

    // Error Handler Middleware
    app.use(errorHandler);

	return app;
};