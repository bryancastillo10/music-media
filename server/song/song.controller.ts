import { Request, Response, NextFunction } from "express";

import { SongService } from "@/song/core/service/song.service";

export class SongController {
	constructor(private readonly songService: SongService) {
		this.fetchAllSongs = this.fetchAllSongs.bind(this);
		this.fetchFeatured = this.fetchFeatured.bind(this);
		this.fetchMyPlaylist = this.fetchMyPlaylist.bind(this);
		this.fetchTrending = this.fetchTrending.bind(this);
	}

	async fetchAllSongs(req: Request, res: Response, next: NextFunction){	
		try{

		}
		catch(error){
			next(error);
		}
	};

	async fetchFeatured(req: Request, res: Response, next: NextFunction){	
		try{

		}
		catch(error){
			next(error);
		}
	};

	async fetchMyPlaylist(req: Request, res: Response, next: NextFunction){	
		try{

		}
		catch(error){
			next(error);
		}
	};


	async fetchTrending(req: Request, res: Response, next: NextFunction){	
		try{

		}
		catch(error){
			next(error);
		}
	};
}