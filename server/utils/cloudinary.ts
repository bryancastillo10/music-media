import { v2 as cloudinary, UploadApiResponse } from "cloudinary";

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET
});

export const uploadImage = async(filePath:string): Promise<UploadApiResponse> => {
	return await cloudinary.uploader.upload(filePath, {
		resource_type: "image",
		folder: "album_images"
	});
};

export const uploadAudio = async(filePath:string): Promise<UploadApiResponse> => {
	return await cloudinary.uploader.upload(filePath, {
		resource_type: "video",
		folder: "songs_audio"
	});
};

export const deleteFile = async (
	publicId: string, 
	resourceType: "image" | "video" = "image"
	) => {
	return await cloudinary.uploader.destroy(publicId, {
		resource_type: resourceType
	});
};

