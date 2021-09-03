import NowPlaying from "../AudioPlayer/NowPlaying.js";
import { Components } from "../Components/Components.js";
import { songs as data } from "../Database/Data.js";

export class QueuePage {
	static main = document.querySelector(".main-content");

	static create = async () => {
		const songs = NowPlaying.songs;
		const index = NowPlaying.nowPlaying;
		const nowPlaying = data[songs[index].dataset.songid - 1];
		const panes = await Components.pane(songs, index);
		this.main.innerHTML = `
		<div class="page">
			<header class="page-section-header">
				<h1>Queue</h1>
			</header>
			<audio src="" preload="metadata"></audio>
			<div class="now-playing">
					<header>Now playing: </header>
					<div class="pane">
						<div class="name">
								<div class="index"></div>
								<div class="details">
										<img src="${nowPlaying.imgSource}" alt="">
										<div class="title_artiste">
												<pre>${nowPlaying.title}</pre>
												<pre class="artiste"><span>${nowPlaying.artistes[0]}</span></pre>
										</div>
								</div>
						</div>
						<i class="material-icons">pause</i>
						<div class="album">Ultraviolence</div>
						<div class="duration">${document.querySelector("#song-end").textContent}</div>
						<i class="material-icons">add</i>
				</div>
			</div>
		</div>`;
	};
	// 	<div class="songs">
	// 	<header>Next: </header>
	// ${panes}
	// </div>

	// static addToQueue = async (songs) => {
	// 	this.queue.querySelector(".songs").innerHTML += await Components.pane(songs, ``);
	// };

	static addNowPlaying = (song) => {};

	static removePane = () => {};
}
