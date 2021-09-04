import { Favourite } from "./pages/Favourite.js";
import { Genre } from "./pages/Genre.js";
import { HistoryPage } from "./pages/History.js";
import { Home } from "./pages/Home.js";
import { Latest } from "./pages/Latest.js";
import { Playlist } from "./pages/Playlist.js";
import { Search } from "./pages/Search.js";
import { Trending } from "./pages/Trending.js";
import AudioPlayer from "./AudioPlayer/AudioPlayer.js";
import { QueuePage } from "./pages/QueuePage.js";
import NowPlaying from "./AudioPlayer/NowPlaying.js";
import { PlaylistModal } from "./Components/PlaylistModal.js";
import { Library } from "./pages/Library.js";

export class Utility {
	static loadLinkContent = (page) => {
		switch (page) {
			case "trending":
				Trending.create();
				break;
			case "latest":
				Latest.create();
				break;
			case "genre":
				Genre.create();
				break;
			case "search":
				Search.create();
				break;
			case "favourite":
				Favourite.create();
				break;
			case "history":
				HistoryPage.create();
				break;
			case "library":
				Library.create();
				break;
			case "playlists":
				Playlist.create();
				break;

			default:
				Home.create();
				break;
		}
	};

	static theme = () => {
		const root = document.documentElement;
		const themeToggle = document.querySelector(".theme-toggle");

		if (themeToggle.classList.contains("dark")) {
			root.style.setProperty("--bg-color", "#fff");
			root.style.setProperty("--text-color", "#000");
			root.style.setProperty("--card-color", "rgb(207, 206, 206)");
		} else {
			root.style.setProperty("--bg-color", "rgb(24, 23, 23)");
			root.style.setProperty("--text-color", "#fff");
			root.style.setProperty("--card-color", "rgb(44, 43, 43)");
		}

		themeToggle.classList.toggle("dark");
		themeToggle.classList.toggle("light");
	};

	static startAudioPlayer() {}

	static bottomBarEventDelegator(e) {
		if (NowPlaying.nowPlaying === null) {
			return;
		}

		// const bottomBar = document.querySelector(".bottom-bar");
		const classes = e.target.classList;

		classes.contains("play")
			? NowPlaying.resumePause()
			: classes.contains("previous")
			? NowPlaying.playPrevious()
			: classes.contains("next")
			? NowPlaying.playNext()
			: // : classes.contains("repeat")
			// ? bottomBar.querySelector(".repeat").addEventListener("click", NowPlaying.toggleRepeat)
			// : classes.contains("shuffle")
			// ? bottomBar.querySelector(".shuffle").addEventListener("click", NowPlaying.toggleShuffle)
			classes.contains("queue-btn")
			? QueuePage.create()
			: // : classes.contains("volume-btn")
			  // ? bottomBar.querySelector(".volume-btn").addEventListener("click", NowPlaying.volumeControl)
			  false;
	}

	static updateBottomBar = (card) => {
		const bottomBar = document.querySelector(".bottom-bar");
		const mobileBottomBar = document.querySelector(".mobile-bottom-bar");
		const songImg = bottomBar.querySelector("img");
		const mobileSongImg = mobileBottomBar.querySelector("img");
		const songTitle = bottomBar.querySelector(".title");
		const mobileSongTitle = mobileBottomBar.querySelector(".title");
		const songArtiste = bottomBar.querySelector(".artiste");
		const mobileSongArtiste = mobileBottomBar.querySelector(".artiste");

		songImg.src = card.children[0].src;
		mobileSongImg.src = card.children[0].src;
		songTitle.innerHTML = card.children[1].children[1].children[0].innerHTML;
		mobileSongTitle.innerHTML = card.children[1].children[1].children[0].innerHTML;
		songArtiste.innerHTML = card.children[1].children[1].children[1].innerHTML;
		mobileSongArtiste.innerHTML = card.children[1].children[1].children[1].innerHTML;
		// mobileSongImg.src = card.children[0].src
		// mobileSongTitle.innerHTML = card.children[1].children[1].children[0].innerHTML
		// mobileSongArtiste.innerHTML = card.children[1].children[1].children[1].innerHTML
	};

	static getTarget = (e) => {
		if (e.target.tagName === "I") {
			return e.target.parentElement;
		} else {
			return e.target;
		}
	};

	static formatTime = (time) => {
		const arr = `${time / 60}`.split(".");
		const minutes = arr[0];

		arr[0] = 0;
		const seconds = +`${arr.join(".") * 60}`.split(".")[0];

		if (seconds < 10) {
			return `${minutes}:0${seconds}`;
		} else {
			return `${minutes}:${seconds}`;
		}
	};

	static addOptions = (e) => {
		const main = document.querySelector(".main-content");
		const sideNav = document.querySelector(".side-nav");
		const contentBar = document.querySelector(".content-bar");

		const button = this.getTarget(e);

		// create elements
		const elements = this.createElement([
			{ class: "add-container", text: "" },
			{ class: "play", text: "play" },
			{ class: "add-to-playlist", text: "add to playlist" },
			{ class: "add-to-queue", text: "add to queue" },
			{ class: "add-to-favourite", text: "add to favourites" }
		]);

		// append children to container
		const container = elements[0];
		elements.forEach((element, index) => {
			index !== 0 && container.appendChild(element);
		});

		//append container to button
		button.appendChild(container);

		const horizontal =
			main.getBoundingClientRect().width - (e.clientX - sideNav.getBoundingClientRect().width) <
			container.getBoundingClientRect().width;
		const vertical =
			main.getBoundingClientRect().height -
				(e.clientY - contentBar.getBoundingClientRect().height) <
			container.getBoundingClientRect().height;

		if (horizontal) {
			container.style.right = `${button.getBoundingClientRect().width / 2}px`;
			container.style.left = ``;
		} else {
			container.style.left = `${button.getBoundingClientRect().width / 2}px`;
			container.style.right = ``;
		}

		if (vertical) {
			container.style.bottom = `${button.getBoundingClientRect().height / 2}px`;
			container.style.top = ``;
		} else {
			container.style.top = `${button.getBoundingClientRect().height / 2}px`;
			container.style.bottom = ``;
		}

		document.addEventListener("mousedown", (e) => {
			if (
				!["play", "add-to-playlist", "add-to-queue", "add-to-favourite"].includes(
					e.target.className
				)
			) {
				container.remove();
			}
		});
	};

	static createElement = (elements) => {
		const arr = [];

		elements.forEach((element) => {
			const div = document.createElement("div");
			div.classList.add(`${element.class}`);
			div.innerText = element.text;
			arr.push(div);
		});

		return arr;
	};

	static removeAddContainer = () => {
		document.querySelector(".add-container").remove();
	};

	static playlistModal() {}
}
