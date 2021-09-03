// import { AudioPlayer } from "./AudioPlayer";

import InfoModal from "../Components/InfoModal.js";

export class Favourite {
	static songs = [];

	static addToFavourite(card) {
		const id = card.dataset.songid;
		if (this.songs.includes(id)) {
			// show info modal that says song is already in favourite
		} else {
			this.songs.push(id);
			InfoModal.show("added to favourites");
		}
	}
}
