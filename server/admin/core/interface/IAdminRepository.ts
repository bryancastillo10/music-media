import { UploadedFile } from "express-fileupload";

import { SongData } from "@/admin/core/dto/song";
import { AlbumData } from "@/admin/core/dto/album";

export interface IAdminRepository {
	createSong(songData: SongData): Promise<SongData>;
	deleteSong(): Promise<void>;
	createAlbum(): Promise<AlbumData>;
	deleteAlbum(): Promise<void>;
	findUserById(userId:string): Promise<boolean>;
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