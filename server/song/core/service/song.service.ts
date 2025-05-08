
import { FetchSongRequest, FetchMyPlaylist } from "@/song/core/interface/ISongRepository";
import { SongRepository } from "@/song/song.repository";

export class SongService {
	constructor(private readonly songRepository: SongRepository){

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