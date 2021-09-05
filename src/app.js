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
import MainContent from "./js/Utilities/mainContent.js";

document.addEventListener("DOMContentLoaded", () => {
	const mobileAddModal = document.querySelector(".add-container-mobile");
	const mobileAddModalContent = document.querySelector(".add-content-mobile");
	const mainContent = document.querySelector(".main-content");
	const songInfo = document.querySelector("#song-info");

	// redirects to home on the index path
	document.location.hash = document.location.hash === "" ? "home" : document.location.hash;

	// loads page content when page loads
	Navigation.setInitialNav();

	// sets the current page color when navigating
	window.onpopstate = () => {
		Navigation.setNav();
	};

	// close mobile add modal
	mobileAddModal.addEventListener("click", (e) => {
		if (e.target.classList.contains("add-container-mobile")) {
			MobileFunctionalities.closemobileModal();
		}
	});

	// select mobile modal options
	mobileAddModalContent.addEventListener("click", MobileFunctionalities.mobileModalEvtDelegator);

	// main-content pointer events
	mainContent.addEventListener("pointerdown", MainContent.pointerEvtDelegator);

	// main-content click events
	mainContent.addEventListener("click", MainContent.clickEvtDelegator);

	// song info click event
	songInfo.addEventListener("click", MobileFunctionalities.songInfoEvtDelegator);

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
	bottomBar.addEventListener("click", Utility.bottomBarEventDelegator);
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
