import AudioPlayer from "./AudioPlayer.js";
import { QueuePage } from "../pages/QueuePage.js";
import { Utility } from "../Utility.js";
import { History } from "./History.js";
import InfoModal from "../Components/InfoModal.js";

export default class NowPlaying {
	static audio = document.querySelector("#music_player");
	static songs = [];
	static nowPlaying = null;
	static paused;

	static play = (position) => {
		const song = this.songs[position];
		this.audio.src = song.dataset.src;
		Utility.updateBottomBar(song);
		this.nowPlaying = position;
		this.audio.play();
		this.paused = false;
		History.addToHistory(song);
	};

	static addToNowPlaying = (songs) => {
		const isEmpty = this.songs.length < 1;
		this.songs = [...this.songs, ...songs];
		InfoModal.show("added song to queue");
		if (isEmpty) {
			this.play(0);
		}
	};

	static playNext = () => {
		this.nowPlaying === this.songs.length - 1 ? this.play(0) : this.play(this.nowPlaying + 1);
	};

	static playPrevious = () => {
		this.nowPlaying === 0 ? this.play(0) : this.play(this.nowPlaying - 1);
	};

	static resumePause = () => {
		if (this.paused) {
			this.audio.play();
			this.paused = false;
		} else {
			this.audio.pause();
			this.paused = true;
		}
	};

	static show = () => {
		QueuePage.create();
	};
}
