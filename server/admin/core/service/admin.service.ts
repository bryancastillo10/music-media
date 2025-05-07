import { AdminRepository } from "@/admin/admin.repository";

import { SongRequest } from "@/admin/core/interface/IAdminRepository";
import { NotFoundError, AuthorizationError } from "@/infrastructure/errors/customErrors";


export class AdminService {
	constructor(private readonly adminRepository: AdminRepository){ }

	async createSong({songData, audioFile, imageFile}: SongRequest) {
		if(!audioFile || !imageFile) {
			throw new NotFoundError("Audio & Image Files must be provided");
		};

		const { uploadImage, uploadAudio } = await import("@/utils/cloudinary");

		const audioUpload = await uploadAudio(audioFile);
		const imageUpload = await uploadImage(imageFile);

		const newSong = await this.adminRepository.createSong({
			...songData,
			audioUrl: audioUpload.secure_url,
			imageUrl: imageUpload.secure_url
		});

		if(songData.albumId){
			await this.adminRepository.connectSongToAlbum(
				{songId: newSong.id, 
				 albumId: songData.albumId
				})
		};

		return newSong;
	}

	async deleteSong() {

	}
	
	async createAlbum(){

	}

	async deleteAlbum(){

	}
}