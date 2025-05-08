import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { DatabaseError, NotFoundError } from "@/infrastructure/errors/customErrors";

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
        		throw new DatabaseError("Database error at createSong method");
      		}
      		throw error;
		}
	};

	async deleteSong(songId:string): Promise<Partial<SongData>> {
		try{
			const song = await this.getSongAndUpdateAlbum(songId);

			await this.prisma.song.delete({
				where: {id : songId }
			});

			return song;
		}
		catch (error) {
      		if (error instanceof PrismaClientKnownRequestError) {
        		console.error(error.message);
        		throw new DatabaseError("Database error at deleteSong method");
      		}
      		throw error;
    	}
	}

	async createAlbum(albumData: AlbumData): Promise<AlbumData> {
		try{
			const album = await this.prisma.album.create({
				data: {
					title: albumData.title,
					artist: albumData.artist,
					releaseYear: albumData.releaseYear,
					imageUrl: albumData.imageUrl
				}
			});
			return album;
		}
		catch (error) {
      		if (error instanceof PrismaClientKnownRequestError) {
        		console.error(error.message);
        		throw new DatabaseError("Database error at createAlbum method");
      		}
      		throw error;
    	}
	}


	async deleteAlbum(albumId: string): Promise<void> {
		try{

			await this.prisma.song.deleteMany({
				where: { albumId }
			});

			await this.prisma.album.delete({
				where: { id: albumId}
			});


		}
		catch(error){
			if(error instanceof PrismaClientKnownRequestError) {
				console.error(error.message);
				throw new DatabaseError("Database error at deleteAlbum")
			}
			throw error;
		}
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

	async getSongAndUpdateAlbum(songId: string){
		const song = await this.prisma.song.findUnique({
			where: { id: songId },
			select: {
				id: true,
				imageUrl: true,
				audioUrl: true,
				albumId: true 
			}
		});

		if(!song){
			throw new NotFoundError("Song");
		}

		if(song.albumId){
			await this.prisma.album.update({
				where: { id: song.albumId},
				data: {
					songs: {
						disconnect: { id: song.id }
					}
				}
			});
		};
		 return {
    		id: song.id,
    		imageUrl: song.imageUrl,
    		audioUrl: song.audioUrl,
    		albumId: song.albumId ?? null,
  		};
	}
}