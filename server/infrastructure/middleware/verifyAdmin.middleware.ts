import { Response, NextFunction } from "express";
import { AdminRepository } from "@/admin/admin.repository";

import { AuthorizationError, NotFoundError } from "@/infrastructure/errors/customErrors";
import { CustomRequest } from "@/infrastructure/middleware/type";

const adminRepository = new AdminRepository();

export const verifyAdmin = async (req: CustomRequest, res: Response, next: NextFunction) => {
	try{
		const userId = req.user?.id;

		if(!userId){
			throw new NotFoundError("User ID");
		};

		const isAdmin = await adminRepository.findUserById(userId);

		if(!isAdmin) {
			throw new AuthorizationError("Role Not Allowed");
		};
	}
	catch(error){
		next(error)
	}
};