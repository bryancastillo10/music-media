import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { DatabaseError } from "@/infrastructure/errors/customErrors";

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
		try{
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
		}
		catch(error){
      		if (error instanceof PrismaClientKnownRequestError) {
        		console.error(error.message);
        		throw new DatabaseError("Database error at createSite method");
      		}
      		throw error;
		}
	};

	async deleteSong(songId:string): Promise<void> {
		try{
			await this.prisma.song.delete({
				where: {id : songId }
			});
		}
		catch (error) {
      		if (error instanceof PrismaClientKnownRequestError) {
        		console.error(error.message);
        		throw new DatabaseError("Database error at createSite method");
      		}
      		throw error;
    	}
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