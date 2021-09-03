import { Playlist } from "../AudioPlayer/Playlist.js";

export class PlaylistModal {
	static main = document.querySelector(".main-content");
	static currentCard;

	static create(type) {
		let markup = ``;

		switch (type) {
			case "choose":
				markup = this.choosePlaylist();
				break;
			case "add":
				markup = this.addNewPlaylist();
				break;

			default:
				throw new Error("invalid type");
				break;
		}

		this.main.innerHTML += `
		<div class="modal">
			<div class="playlist-modal">
				${markup}
			</div>
		</div>
		`;
	}

	static choosePlaylist() {
		const playlists = () => {
			const playlistKeys = Object.keys(Playlist.playlist);
			let playlistsMarkup = `<header> <h3> Select Playlist <h3> </header>`;

			if (playlistKeys.length > 0) {
				playlistsMarkup += playlistKeys.reduce((acc, curr) => {
					return acc + `<p class="playlist_option">${curr}</p>`;
				}, ``);
			} else {
				playlistsMarkup += `<p class="no-playlist">You have no playlist currently</p>`;
			}

			return playlistsMarkup;
		};

		return `
      <div class="choose_playlist-modal">
				<div class="playlists">
					${playlists()}
				</div>
				<div class="playlist-btns">
					<button class="cancel-btn"> Cancel </button>
					<button class="add_new_playlist-btn"> Add New Playlist </button>
				</div>
			</div>`;
	}

	static addNewPlaylist() {
		return `
		<div class="add_new_playlist-modal">
				<form class="add_playlist_form">
					<input type="text" required placeholder="playlist name" name="playlist_name" id="playlist_name">
					<p class="form_error"></p>
					<div class="playlist-btns">
						<button class="cancel-btn"> Cancel </button>
						<input type="submit" value="Add" name="add_new_playlist">
					</div>
				</form>
		</div>`;
	}
}
