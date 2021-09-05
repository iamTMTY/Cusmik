import { Utility } from "../Utility.js";
import NowPlaying from "../AudioPlayer/NowPlaying.js";
import { PlaylistModal } from "../Components/PlaylistModal.js";
import { Favourite } from "../AudioPlayer/Favourite.js";
import { Playlist } from "../AudioPlayer/Playlist.js";
import MobileFunctionalities from "./mobileFunctionalities.js";
import { Components } from "../Components/Components.js";
import { Playlist as PlaylistPage } from "../pages/Playlist.js";

export default class MainContent {
	static mainContentElement = document.querySelector(".main-content");
	static mobileAddModal = document.querySelector(".add-container-mobile");
	static mobileAddModalContent = document.querySelector(".add-content-mobile");

	static clickEvtDelegator = (e) => {
		let card = Utility.getTarget(e).parentElement.parentElement;

		if (e.target.classList.contains("play")) {
			NowPlaying.songs = [card];
			NowPlaying.play(0);
		} else if (e.target.classList.contains("add")) {
			Utility.addOptions(e);
		} else if (e.target.classList.contains("add_new_playlist-btn")) {
			document.querySelector(".playlist-modal").innerHTML = PlaylistModal.addNewPlaylist();
			document
				.querySelector(".add_playlist_form")
				.addEventListener("submit", (e) => Playlist.addNewPlaylist(e, true));
		} else if (e.target.classList.contains("cancel-btn")) {
			document.querySelector(".modal").remove();
		} else if (e.target.classList.contains("add-to-playlist")) {
			card = e.target.parentElement.parentElement.parentElement.parentElement;
			PlaylistModal.create("choose");
			PlaylistModal.currentCard = card;
			Utility.removeAddContainer();
		} else if (e.target.classList.contains("add-to-queue")) {
			card = e.target.parentElement.parentElement.parentElement.parentElement;
			NowPlaying.addToNowPlaying([card]);
			Utility.removeAddContainer();
		} else if (e.target.classList.contains("add-to-favourite")) {
			card = e.target.parentElement.parentElement.parentElement.parentElement;
			Favourite.addToFavourite(card);
			Utility.removeAddContainer();
		} else if (e.target.classList.contains("playlist_option")) {
			Playlist.addToPlaylist(e.target.textContent, PlaylistModal.currentCard);
			document.querySelector(".modal").remove();
			MobileFunctionalities.closemobileModal();
			//show confirmation message
		} else if (e.target.classList.contains("add_playlist_btn")) {
			PlaylistModal.create("add");
			document.querySelector(".add_playlist_form").addEventListener("submit", (e) => {
				const isEmpty = Object.keys(Playlist.playlist) < 1 ? true : false;
				Playlist.addNewPlaylist(e, false);

				if (isEmpty) {
					document.querySelector(".no-playlist").remove();
					document.querySelector(".page-section").innerHTML += Components.playlistCard();
				} else {
					const playlist = Object.keys(Playlist.playlist);
					document.querySelector(".cards").innerHTML += Components.playlistCardMarkup([
						playlist[playlist.length - 1]
					]);
				}
			});
		} else if (e.target.classList.contains("view_playlist")) {
			PlaylistPage.viewPlaylist(e.target.dataset.playlist);
		} else if (e.target.classList.contains("play_playlist")) {
			console.log(e.target, e.target.dataset);
			NowPlaying.songs = Playlist.playlist[PlaylistPage.currentPlaylist];
			console.log(NowPlaying.songs, e.target.dataset.position);
			NowPlaying.play(parseInt(e.target.dataset.position));
		}
	};

	static pointerEvtDelegator = (e) => {
		const card = e.target.parentElement;
		if (e.target.classList.contains("mobile-play")) {
			const start = new Date();

			const showOptions = setTimeout(() => {
				MobileFunctionalities.showMobileModal();
				PlaylistModal.currentCard = card;
			}, 500);

			this.mainContentElement.addEventListener(
				"pointermove",
				(e) => {
					clearTimeout(showOptions);
				},
				{ once: true }
			);
			this.mainContentElement.addEventListener(
				"pointerup",
				(e) => {
					const end = new Date();
					if (end - start < 500) {
						clearTimeout(showOptions);
						NowPlaying.songs = [card];
						NowPlaying.play(0);
					}
				},
				{ once: true }
			);
		}
	};
}
