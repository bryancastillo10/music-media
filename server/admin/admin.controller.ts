import { Response, NextFunction } from "express";
import { UploadedFile } from "express-fileupload";

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

			await this.adminService.verifyRole(userId);

			const songData = JSON.parse(req.body.songData);
			const audioFile = req.files?.audioFile as UploadedFile;
			const imageFile = req.files?.imageFile as UploadedFile;

			const newSong = await this.adminService.createSong({songData, audioFile, imageFile});
		
			res.status(201).json({ message:"New song has been added", song: newSong});
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