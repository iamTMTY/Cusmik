import { PlaylistModal } from "../Components/PlaylistModal.js";
import { Utility } from "../Utility.js";
import NowPlaying from "../AudioPlayer/NowPlaying.js";
import { Favourite } from "../AudioPlayer/Favourite.js";

export default class MobileFunctionalities {
	static mobileAddModal = document.querySelector(".add-container-mobile");
	static mobileAddModalContent = document.querySelector(".add-content-mobile");

	static closemobileModal = () => {
		this.mobileAddModal.style.left = "100%";
		this.mobileAddModal.style.opacity = "0";
		this.mobileAddModalContent.style.transform = "translateY(100%)";
	};

	static showMobileModal = () => {
		this.mobileAddModal.style.left = "0";
		this.mobileAddModal.style.opacity = "1";
		this.mobileAddModalContent.style.transform = "translateY(0)";
	};

	static mobileModalEvtDelegator = (e) => {
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
	};

	static songInfoEvtDelegator = (e) => {
		if (NowPlaying.nowPlaying === null) {
			return;
		}
		const classes = e.target.classList;
		const songInfo = document.querySelector("#song-info");

		if (classes.contains("previous") || classes.contains("play") || classes.contains("next")) {
			Utility.bottomBarEventDelegator(e);
		} else if (e.target.classList.contains("kebab_menu")) {
			PlaylistModal.currentCard = NowPlaying.songs[NowPlaying.nowPlaying];
			this.showMobileModal();
		} else if (e.target.classList.contains("expand_more")) {
			songInfo.classList.replace("full_song_info", "song-info");
		} else {
			songInfo.classList.contains("song-info") &&
				songInfo.classList.replace("song-info", "full_song_info");
		}
	};
}
