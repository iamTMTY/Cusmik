import { Components } from "../Components/Components.js";
import { Playlist as AudioPlaylist } from "../AudioPlayer/Playlist.js";
import { songs } from "../Database/Data.js";

export class Playlist extends Components {
	static main = document.querySelector(".main-content");
	static currentPlaylist;

	static create = () => {
		this.main.innerHTML = `
			<div class="page" id="playlist">
				<section class="page-section">
					<header class="page-section-header playlist_header">
						<h1>Your Playlists</h1>
						<div class="add_playlist_btn-container"><button class="add_playlist_btn">Add Playlist</button></div>
					</header>
					${this.playlistCard()}
				</section>
					
			</div>`;
	};

	static viewPlaylist(playlistName) {
		const section = document.querySelector(".page-section");

		// const ids = AudioPlaylist.playlist[playlistName].map((card) => card.dataset.songid);
		const playlistSongs = AudioPlaylist.playlist[playlistName].map((card) => {
			return songs[parseInt(card.dataset.songid) - 1];
		});
		// const playlistSongs = songs.filter((song) => ids.includes(song.id));

		if (playlistSongs.length < 1) {
			section.innerHTML = `
				<header class="page-section-header playlist_header">
					<h1> ${playlistName} </h1>
				</header>
				<p> You have no songs in this playlist </p>
			`;
		} else {
			this.currentPlaylist = playlistName;
			section.innerHTML = `
			<header class="page-section-header playlist_header">
				<h1> ${playlistName} </h1>
			</header>
			<div class="cards">
				${this.card(playlistSongs, "play_playlist")} 
			</div>
		`;
		}
	}
}
