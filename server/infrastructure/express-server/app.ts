import express from "express";
import cors from "cors";

import cookieParser from "cookie-parser";
import { helmetConfig } from "@/utils/helmet";


export const startApp = () => {
	const app = express();

    // Security Middleware
    app.use(helmetConfig);
    app.use(cors({
        origin: "http://localhost:5173",
        credentials: true
    }));
    
    // Body Parser Middleware
    app.use(cookieParser());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    // Core Routes

    

    // Serve React Client

    // Error Handler Middleware

    // app.use(errorHandler);

	return app;
};