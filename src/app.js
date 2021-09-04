import AudioPlayer from "./js/AudioPlayer/AudioPlayer.js";
import NowPlaying from "./js/AudioPlayer/NowPlaying.js";
import { Playlist } from "./js/AudioPlayer/Playlist.js";
import { Playlist as PlaylistPage } from "./js/pages/Playlist.js";
import { Components } from "./js/Components/Components.js";
import { PlaylistModal } from "./js/Components/PlaylistModal.js";
import { Utility } from "./js/Utility.js";
import { Favourite } from "./js/AudioPlayer/Favourite.js";
import MobileFunctionalities from "./js/Utilities/mobileFunctionalities.js";
import Navigation from "./js/Utilities/navigation.js";

document.addEventListener("DOMContentLoaded", () => {
	document.location.hash = document.location.hash === "" ? "home" : document.location.hash;

	// loads page content when page loads
	Navigation.setInitialNav();

	// sets the current page color when navigating
	window.onpopstate = () => {
		Navigation.setNav();
	};

	// mobile add modal
	const mobileAddModal = document.querySelector(".add-container-mobile");
	const mobileAddModalContent = document.querySelector(".add-content-mobile");
	const mainContent = document.querySelector(".main-content");

	// close mobile add modal
	mobileAddModal.addEventListener("click", (e) => {
		if (e.target.classList.contains("add-container-mobile")) {
			MobileFunctionalities.closemobileModal();
		}
	});

	// select mobile modal options

	mobileAddModalContent.addEventListener("click", (e) => {
		const card = PlaylistModal.currentCard;
		if (e.target.classList.contains("play")) {
			NowPlaying.songs = [card];
			NowPlaying.play(0);
			MobileFunctionalities.closemobileModal();
		} else if (e.target.classList.contains("add-to-queue")) {
			NowPlaying.addToNowPlaying([card]);
			MobileFunctionalities.closemobileModal();
		} else if (e.target.classList.contains("add-to-playlist")) {
			PlaylistModal.create("choose");
		} else if (e.target.classList.contains("add-to-favourite")) {
			Favourite.addToFavourite(card);
			MobileFunctionalities.closemobileModal();
		}
	});

	// main-content mousedown events
	mainContent.addEventListener("pointerdown", (e) => {
		const card = e.target.parentElement;
		if (e.target.classList.contains("mobile-play")) {
			const start = new Date();

			const showOptions = setTimeout(() => {
				mobileAddModal.style.left = "0";
				mobileAddModal.style.opacity = "1";
				mobileAddModalContent.style.transform = "translateY(0)";
				PlaylistModal.currentCard = card;
			}, 500);

			mainContent.addEventListener(
				"pointermove",
				(e) => {
					clearTimeout(showOptions);
				},
				{ once: true }
			);
			mainContent.addEventListener(
				"pointerup",
				(e) => {
					const end = new Date();
					console.log(end - start);
					if (end - start < 500) {
						clearTimeout(showOptions);
						NowPlaying.songs = [card];
						NowPlaying.play(0);
					}
				},
				{ once: true }
			);
		}
	});

	// main-content click events
	mainContent.addEventListener("click", (e) => {
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
	});

	// Dark mode toggler
	document.querySelector(".theme-toggle").addEventListener("click", Utility.theme);

	// audio events
	AudioPlayer.audio.addEventListener("ended", NowPlaying.playNext);
	AudioPlayer.audio.addEventListener("timeupdate", AudioPlayer.updateTime);
	AudioPlayer.audio.addEventListener("loadedmetadata", AudioPlayer.updateTime);
	// const progressTrack = document.querySelector('.progress-track')
	// const bar = progressTrack.querySelector('.bar')

	// bar.addEventListener('mousedown', AudioPlayer.seekStart)

	// bottom bar events
	const bottomBar = document.querySelector(".bottom-bar");
	const mobileBottomBar = document.querySelector(".mobile-bottom-bar");
	bottomBar.addEventListener("click", Utility.bottomBarEventDelegator);
	mobileBottomBar.addEventListener("click", Utility.bottomBarEventDelegator);
	bottomBar.addEventListener("mousedown", (e) => {
		if (NowPlaying.nowPlaying === null) {
			return;
		}
		e.target.classList.contains("song-bar") || e.target.classList.contains("song-progress")
			? AudioPlayer.seekStart(e)
			: e.target.classList.contains("volume-bar") || e.target.classList.contains("volume-progress")
			? AudioPlayer.controlVolume(e)
			: false;
	});
});
