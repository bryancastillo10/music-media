import { Request, Response, NextFunction } from "express";
import { CustomRequest } from "@/infrastructure/middleware/type";

export class AdminController{
	constructor(){
		this.createSong = this.createSong.bind(this);
		this.deleteSong = this.deleteSong.bind(this);
		this.createAlbum = this.createAlbum.bind(this);
		this.deleteAlbum = this.deleteAlbum.bind(this);
	}

	async createSong(req: CustomRequest, res: Response, next: NextFunction) {

	}

	async deleteSong(req: CustomRequest, res: Response, next: NextFunction) {

	}

	async createAlbum(req: CustomRequest, res: Response, next: NextFunction) {

	}

	async deleteAlbum(req: CustomRequest, res: Response, next: NextFunction) {

	}
}