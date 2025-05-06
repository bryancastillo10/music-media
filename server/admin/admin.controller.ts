import { Response, NextFunction } from "express";
import { CustomRequest } from "@/infrastructure/middleware/type";
import { AdminService } from "@/admin/core/service/admin.service";

export class AdminController{
	constructor(private readonly adminService: AdminService){
		this.createSong = this.createSong.bind(this);
		this.deleteSong = this.deleteSong.bind(this);
		this.createAlbum = this.createAlbum.bind(this);
		this.deleteAlbum = this.deleteAlbum.bind(this);
	}

	async createSong(req: CustomRequest, res: Response, next: NextFunction) {
		try{
			const userId = req.user?.id;
            if (!userId) {
                throw new Error("User ID is undefined. Ensure auth middleware is applied");
            }

		
		}
		catch(error){
			next(error);
		}
	}

	async deleteSong(req: CustomRequest, res: Response, next: NextFunction) {

	}

	async createAlbum(req: CustomRequest, res: Response, next: NextFunction) {

	}

	async deleteAlbum(req: CustomRequest, res: Response, next: NextFunction) {

	}
}