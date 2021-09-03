// import { AudioPlayer } from "./AudioPlayer";

export class Favourite {
	static songs = [];

	static addToFavourite(card) {
		const id = card.dataset.songid;
		if (this.songs.includes(id)) {
			// show info modal that says song is already in favourite
		} else {
			this.songs.push(id);
		}
	}
}
