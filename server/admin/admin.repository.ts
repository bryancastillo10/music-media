import { PrismaClient } from "@prisma/client";

import { IAdminRepository, IConnectSongAlbum } from "@/admin/core/interface/IAdminRepository";
import { AlbumData } from "@/admin/core/dto/album";
import { SongData } from "@/admin/core/dto/song";


export class AdminRepository implements IAdminRepository {
	private prisma = new PrismaClient();

	async findUserById(userId: string) {
		const user = await this.prisma.user.findUnique({
			where: { id: userId },
			select: { role: true }
		});	

		return user?.role === "ADMIN";
	};

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

	async connectSongToAlbum({songId, albumId}: IConnectSongAlbum<string>) {
		await this.prisma.album.update({
			where: { id: albumId },
			data: {
				songs: {
					connect: { id: songId }
				}
			}
		})
	};
}