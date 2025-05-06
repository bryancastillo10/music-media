import { AdminRepository } from "@/admin/admin.repository";

import { SongRequest } from "@/admin/core/interface/IAdminRepository";
import { NotFoundError, AuthorizationError } from "@/infrastructure/errors/customErrors";

import { uploadImage, uploadAudio } from "@/utils/cloudinary";

export class AdminService {
	constructor(private readonly adminRepository: AdminRepository){ }

	async verifyRole(userId:string | undefined): Promise<void> {
		if(!userId){
			throw new NotFoundError("User ID was not found. Ensure authentication")
		};

		const isAdmin = await this.adminRepository.findUserById(userId);

		if(!isAdmin) {
			throw new AuthorizationError("Role Not Allowed");
		};
	};

	async createSong({songData, audioFile, imageFile}: SongRequest) {
		if(!audioFile || !imageFile) {
			throw new NotFoundError("Audio & Image Files must be provided");
		};

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