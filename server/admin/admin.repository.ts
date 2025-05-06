import { PrismaClient } from "@prisma/client";

import { IAdminRepository } from "@/admin/core/interface/IAdminRepository";
import { AlbumData } from "@/admin/core/dto/album";
import { SongData } from "@/admin/core/dto/song";


export class AdminRepository implements IAdminRepository {
	private prisma = new PrismaClient();


	async createSong(songData: SongData): Promise<SongData> {
		const song = await this.prisma.song.create({
			data: {
				title: songData.title,
				artist: songData.artist,
				imageUrl: songData.imageUrl,
				audioUrl: songData.audioUrl,
				duration: songData.duration,
				...(songData.albumId && { albumId: songData.albumId })
			}
		});
		return song;
	};

	deleteSong(): Promise<void> {
		throw new Error("Method not implemented.");
	}
	createAlbum(): Promise<AlbumData> {
		throw new Error("Method not implemented.");
	}
	deleteAlbum(): Promise<void> {
		throw new Error("Method not implemented.");
	}
}