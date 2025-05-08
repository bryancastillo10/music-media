import { AdminRepository } from "@/admin/admin.repository";

import { AlbumRequest, SongRequest } from "@/admin/core/interface/IAdminRepository";
import { NotFoundError } from "@/infrastructure/errors/customErrors";


export class AdminService {
	constructor(private readonly adminRepository: AdminRepository){ }

	private cloudinaryUtils : { 
		uploadImage: Function;
		uploadAudio: Function;
		deleteFile: Function;
		extractPublicId: Function;
	} | null = null;

	private async getCloudinaryUtils() {
		if(!this.cloudinaryUtils) {
			this.cloudinaryUtils = await import("@/utils/cloudinary");
		}

		return this.cloudinaryUtils;
	}

	async createSong({songData, audioFile, imageFile}: SongRequest) {
		if(!audioFile || !imageFile) {
			throw new NotFoundError("Audio & Image Files");
		};

		const { uploadImage, uploadAudio } = await this.getCloudinaryUtils();

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

	async deleteSong(songId:string) {
		if(!songId){
			throw new NotFoundError("Song ID");
		}
		const { deleteFile, extractPublicId } = await this.getCloudinaryUtils();

		const song = await this.adminRepository.deleteSong(songId);

		const imageId = extractPublicId(song.imageUrl);
		const audioId = extractPublicId(song.audioUrl);

		if(imageId){
			await deleteFile(imageId, "image");
		};

		if(audioId){
			await deleteFile(audioId, "video");
		};

		return {
			"message":"Song has been removed successfully"
		}
	}
	
	async createAlbum({albumData, imageFile}: AlbumRequest){
		if(!imageFile){
			throw new NotFoundError("Image File");
		};

		if(!albumData) {
			throw new NotFoundError("Album Information");
		};

		const { uploadImage } = await this.getCloudinaryUtils();

		const imageUpload = await uploadImage(imageFile);

		const newAlbum = await this.adminRepository.createAlbum({
			...albumData,
			imageUrl: imageUpload.secure_url
		});

		return newAlbum;
	}

	async deleteAlbum(albumId:string){
		if(!albumId){
			throw new NotFoundError("Album ID");
		}

		await this.adminRepository.deleteAlbum(albumId);

		return {
			"message": "The album has been deleted successfully"
		}
	}
}