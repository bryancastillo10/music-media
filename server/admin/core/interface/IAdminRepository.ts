import { UploadedFile } from "express-fileupload";

import { SongData } from "@/admin/core/dto/song";
import { AlbumData } from "@/admin/core/dto/album";

export interface IAdminRepository {
	createSong(songData: SongData): Promise<SongData>;
	deleteSong(songId:string): Promise<void>;
	createAlbum(albumData: AlbumData): Promise<AlbumData>;
	deleteAlbum(): Promise<void>;
	findUserById(userId:string): Promise<boolean>;
	getSongAndUpdateAlbum(songId: string): Promise<Partial<SongData>>;
}

export interface SongRequest {
	songData: SongData;
	audioFile: UploadedFile;
	imageFile: UploadedFile;
}

export interface IConnectSongAlbum<T> {
	songId: T;
	albumId: T;
}

export interface AlbumRequest {
	albumData: AlbumData;
	imageFile: UploadedFile;
}