import { SongData } from "@/admin/core/dto/song";
import { AlbumData } from "@/admin/core/dto/album";

export interface IAdminRepository {
	createSong(): Promise<SongData>;
	deleteSong(): Promise<void>;
	createAlbum(): Promise<AlbumData>;
	deleteAlbum(): Promise<void>;
}