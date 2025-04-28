import dotenv from "dotenv";

import { startApp } from "@/infrastructure/express-server/app";
import { connectToDb } from "@/infrastructure/database/connectToDb";

dotenv.config();

const initializeServer = async () => {
	try {
		await connectToDb();
		const app = startApp();

		const port = parseInt(process.env.PORT || "3000");
		app.listen(port, '0.0.0.0', () => {
			console.log(`Server is running on port ${port}`)
		});
	}
	catch(error){
		console.error("Failed to start the server", error);
		process.exit(1)
	}
}

initializeServer();