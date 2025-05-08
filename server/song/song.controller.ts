import { Request, Response, NextFunction } from "express";

export class SongController {
	constructor() {

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