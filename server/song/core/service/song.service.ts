
import { FetchSongRequest, FetchMyPlaylist } from "@/song/core/interface/ISongRepository";

export class SongService {
	constructor(){

	};

	async fetchAllSongs({limit, offset}: FetchSongRequest){

	};

	async fetchFeatured({limit}: FetchSongRequest){

	};

	async fetchMyPlaylist ({userId, limit}: FetchMyPlaylist){

	};

	async fetchTrending ({limit}: FetchSongRequest){

	};
};