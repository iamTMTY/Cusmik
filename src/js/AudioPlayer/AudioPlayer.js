import { Utility } from "../Utility.js";
import { QueuePage } from "../pages/QueuePage.js";

export default class AudioPlayer {
	static audio = document.querySelector("#music_player");

	static bottomBar = document.querySelector(".bottom-bar");
	static progressTrack = document.querySelector(".progress-track");
	static progress = this.progressTrack.querySelector(".song-progress");
	static songBar = this.progressTrack.querySelector(".song-bar");
	static time = this.progressTrack.children[0];

	static updateTime = () => {
		const endTime = this.progressTrack.children[2];
		const mobileSongProgress = document.querySelector(".current-position");

		this.time.innerText = Utility.formatTime(this.audio.currentTime);
		endTime.innerText = this.audio.duration ? Utility.formatTime(this.audio.duration) : "0:00";
		this.progress.style.width = `${(this.audio.currentTime / this.audio.duration) * 100}%`;
		mobileSongProgress.style.width = `${(this.audio.currentTime / this.audio.duration) * 100}%`;
	};

	static seekStart = (e) => {
		this.audio.removeEventListener("timeupdate", this.updateTime);

		const position =
			((e.clientX - this.songBar.getBoundingClientRect().left) /
				this.songBar.getBoundingClientRect().width) *
			100;
		this.progress.style.width = `${position}%`;
		// this.audio.currentTime = (position / 100) * this.audio.duration
		this.progress.style.backgroundColor = `green`;

		this.time.innerText = Utility.formatTime((position / 100) * this.audio.duration);

		window.addEventListener("mousemove", this.seekSong);

		window.addEventListener("mouseup", this.seekEnd, { once: true });
	};

	static seekSong = (e) => {
		let position =
			((e.clientX - this.songBar.getBoundingClientRect().left) /
				this.songBar.getBoundingClientRect().width) *
			100;
		if (e.clientX < this.songBar.getBoundingClientRect().left) {
			position = 0;
			return;
		} else if (e.clientX > this.songBar.getBoundingClientRect().right) {
			position = 100;
		}
		this.progress.style.width = `${position}%`;
		this.time.innerText = Utility.formatTime((position / 100) * this.audio.duration);

		// this.audio.currentTime = (position / 100) * this.audio.duration
	};

	static seekEnd = (e) => {
		this.progress.style.backgroundColor = `rgb(255, 0, 51)`;
		let position =
			((e.clientX - this.songBar.getBoundingClientRect().left) /
				this.songBar.getBoundingClientRect().width) *
			100;

		if (e.clientX < this.songBar.getBoundingClientRect().left) {
			position = 0;
		} else if (e.clientX > this.songBar.getBoundingClientRect().right) {
			position = 100;
		}

		this.audio.currentTime = (position / 100) * this.audio.duration;
		this.time.innerText = Utility.formatTime((position / 100) * this.audio.duration);

		window.removeEventListener("mousemove", this.seekSong);
		this.audio.addEventListener("timeupdate", this.updateTime);
	};
}
