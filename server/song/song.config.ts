import { SongRepository } from "@/song/song.repository";
import { SongService } from "@/song/core/service/song.service";
import { SongController } from "@/song/song.controller";

const songRepository = new SongRepository();

const songService = new SongService(songRepository);

export const songController = new SongController(songService);