import express, { Request, Response } from "express";

const router = express.Router();

router.post("/signin", (req: Request, res: Response) => {
	res.status(200).json({"message":"Helllo it is working"})
});
router.post("/signup", () => {});
router.post("/logout", () => {});

export default router;