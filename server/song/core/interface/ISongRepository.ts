import { SongData } from "@/song/core/dto/song";

export interface ISongRepository {
	fetchAllSongs({limit, offset}:FetchSongRequest): Promise<SongData[]>;
	fetchFeatured({limit}: FetchSongRequest): Promise<SongData[]>;
	fetchMyPlaylist({limit, userId}: FetchMyPlaylist): Promise<SongData[]>;
	fetchTrending({limit}: FetchSongRequest): Promise<SongData[]>;
};

export interface FetchSongRequest {
	limit?: number;
	offset?: number;
}

export interface FetchMyPlaylist extends FetchSongRequest {
	userId: string;
};