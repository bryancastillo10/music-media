import fileUpload from "express-fileupload";

export const fileUploadMiddleware = fileUpload({
	createParentPath: true,
	limits: { fileSize: 100 * 1024 * 1024 },
	useTempFiles: true,
	tempFileDir: "/tmp/"
});