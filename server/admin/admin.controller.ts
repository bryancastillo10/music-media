import { Request, Response, NextFunction } from "express";
import { UploadedFile } from "express-fileupload";

import { AdminService } from "@/admin/core/service/admin.service";

export class AdminController{
	constructor(private readonly adminService: AdminService){
		this.createSong = this.createSong.bind(this);
		this.deleteSong = this.deleteSong.bind(this);
		this.createAlbum = this.createAlbum.bind(this);
		this.deleteAlbum = this.deleteAlbum.bind(this);
	}

	async createSong(req: Request, res: Response, next: NextFunction) {
		try{
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

	async deleteSong(req: Request, res: Response, next: NextFunction) {
		try{
			const songId = req.params.id;

			const message = await this.adminService.deleteSong(songId);

			res.status(200).json({message})
		}
		catch(error){
			next(error);
		}	
	}

	async createAlbum(req: Request, res: Response, next: NextFunction) {
		try{
			const albumData = JSON.parse(req.body.albumData);
			const imageFile = req.files?.imageFile as UploadedFile;

			const newAlbum = await this.adminService.createAlbum({albumData, imageFile});

			res.status(201).json({message:"A New Music Album has been created", album: newAlbum});
		}
		catch(error){
			next(error);
		}	
	}

	async deleteAlbum(req: Request, res: Response, next: NextFunction) {
		try{
			const albumId = req.params.id;

			const message = await this.adminService.deleteAlbum(albumId);

			res.status(200).json({message});
		}
		catch(error){
			next(error);
		}	
	}
}