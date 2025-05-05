import { PrismaClient } from "@prisma/client";

import { IAdminRepository } from "@/admin/core/interface/IAdminRepository";
import { AlbumData } from "./core/dto/album";
import { SongData } from "./core/dto/song";


export class AdminRepository implements IAdminRepository {

	createSong(): Promise<SongData> {
		throw new Error("Method not implemented.");
	}
	deleteSong(): Promise<void> {
		throw new Error("Method not implemented.");
	}
	createAlbum(): Promise<AlbumData> {
		throw new Error("Method not implemented.");
	}
	deleteAlbum(): Promise<void> {
		throw new Error("Method not implemented.");
	}
	private prisma = new PrismaClient();

}