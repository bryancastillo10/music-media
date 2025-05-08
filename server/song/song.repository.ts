import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { DatabaseError } from "@/infrastructure/errors/customErrors";

import { FetchMyPlaylist, FetchSongRequest, ISongRepository } from "@/song/core/interface/ISongRepository";
import { SongData } from "@/song/core/dto/song";

export class SongRepository implements ISongRepository {
	private prisma = new PrismaClient();

	async fetchAllSongs({ limit, offset }: FetchSongRequest): Promise<SongData[]> {
		try{
			return Promise.resolve([]);
		}
		catch(error){
      		if (error instanceof PrismaClientKnownRequestError) {
        		console.error(error.message);
        		throw new DatabaseError("Database error at fetchAllSongs method");
      		}
      		throw error;
		}
	}

	async fetchFeatured({ limit }: FetchSongRequest): Promise<SongData[]> {
		try{
			return Promise.resolve([]);
		}
		catch(error){
      		if (error instanceof PrismaClientKnownRequestError) {
        		console.error(error.message);
        		throw new DatabaseError("Database error at fetchFeatured method");
      		}
      		throw error;
		}
	}

	async fetchMyPlaylist({ limit, userId }: FetchMyPlaylist): Promise<SongData[]> {
		try{
			return Promise.resolve([]);
		}
		catch(error){
      		if (error instanceof PrismaClientKnownRequestError) {
        		console.error(error.message);
        		throw new DatabaseError("Database error at fetchMyPlayllist method");
      		}
      		throw error;
		}
	}

	async fetchTrending({ limit }: FetchSongRequest): Promise<SongData[]> {
		try{
			return Promise.resolve([]);
		}
		catch(error){
      		if (error instanceof PrismaClientKnownRequestError) {
        		console.error(error.message);
        		throw new DatabaseError("Database error at fetchTrending method");
      		}
      		throw error;
		}
	}

}