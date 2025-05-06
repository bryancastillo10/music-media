import { AdminRepository } from "@/admin/admin.repository";

import { SongRequest } from "@/admin/core/interface/IAdminRepository";

export class AdminService {
	constructor(private readonly adminRepository: AdminRepository){ }

	async createSong({songData, audioFile, imageFile}: SongRequest) {

	}

	async deleteSong() {

	}
	
	async createAlbum(){

	}

	async deleteAlbum(){

	}
}