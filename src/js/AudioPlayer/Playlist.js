// import { AudioPlayer } from "./AudioPlayer";
// import { Playlist as PlaylistPage } from "../pages/Playlist.js";

import InfoModal from "../Components/InfoModal.js";
import { PlaylistModal } from "../Components/PlaylistModal.js";
import MobileFunctionalities from "../Utilities/mobileFunctionalities.js";

export class Playlist /*extends AudioPlayer*/ {
	static playlist = {};

	static addToPlaylist(name, card) {
		this.playlist[name].push(card);
		InfoModal.show(`added song to ${name}`);
	}

	static addNewPlaylist = (e, addSong) => {
		e.preventDefault();
		document.querySelector(".form_error").textContent = "";
		const name = e.target.playlist_name.value;

		if (Object.keys(Playlist.playlist).includes(name)) {
			document.querySelector(".form_error").textContent =
				"playlist already exists, please try another name";
		} else {
			this.playlist[name] = [];
			document.querySelector(".modal").remove();
			MobileFunctionalities.closemobileModal();
			addSong && this.addToPlaylist(name, PlaylistModal.currentCard);
		}
	};
}
