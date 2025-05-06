import { AdminRepository } from "@/admin/admin.repository";

import { SongRequest } from "@/admin/core/interface/IAdminRepository";
import { NotFoundError } from "@/infrastructure/errors/customErrors";

import { uploadImage, uploadAudio } from "@/utils/cloudinary";

export class AdminService {
	constructor(private readonly adminRepository: AdminRepository){ }

	async createSong({songData, audioFile, imageFile}: SongRequest) {
		if(!audioFile || !imageFile) {
			throw new NotFoundError("Audio & Image Files must be provided");
		}

		const audioUpload = await uploadAudio(audioFile);
		const imageUpload = await uploadImage(imageFile);

		const newSong = await this.adminRepository.createSong({
			...songData,
			audioUrl: audioUpload.secure_url,
			imageUrl: imageUpload.secure_url
		});

		if(songData.albumId){
			// Repository to update song in an album (Song ID & Album ID)
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