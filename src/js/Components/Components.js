import { songs as data } from "../Database/Data.js";
import { Playlist as AudioPlaylist } from "../AudioPlayer/Playlist.js";
import { Utility } from "../Utility.js";
export class Components {
	static card = (cards, playType) => {
		return cards.reduce((acc, curr, index) => {
			return (
				acc +
				`
				<div class="card song" data-src="${curr.musicSrc}" data-songId="${curr.id}" >
					<img class="card-img" src="${curr.imgSource}" alt="song_image">
					<div class="card-details">
						<button class="${playType} card-play" data-position="${index}"><i data-position="${index}" class="material-icons ${playType}">play_arrow</i></button>
						<div class="card-title-artiste">
								<p class="card-title">${curr.title}</p>
								<p class="card-artiste">${curr.artistes.reduce((acc, artiste, i) => {
									return (
										acc +
										`<span class="artiste">${artiste}${
											i === curr.artistes.length - 1 ? "" : ", "
										}</span>`
									);
								}, ``)}
								</p>
						</div>
						<button class="add card-add"><i class="material-icons add" >add</i></button>
					</div>
					<i class="mobile-play material-icons"> play_arrow </i>
				</div>`
			);
		}, ``);
	};

	static pane = async (songs, index) => {
		let paneMarkup = ``;

		for (let i = index, j = 0; i < songs.length; i++, j++) {
			const song = data[songs[i].dataset.songid - 1];
			paneMarkup += `
			<div class="pane">
				<div class="name">
						<div class="index">${j + 1}</div>
						<div class="details">
								<img src="${song.imgSource}" alt="">
								<div class="title_artiste">
										<pre>${song.title}</pre>
										<pre class="artiste"> ${song.artistes[0]}</pre>
								</div>
						</div>
				</div>
				<i class="material-icons">play_arrow</i>
				<i class="material-icons">add</i>
			</div>`;
		}

		return paneMarkup;
		// ${song.artistes.reduce((acc, artiste, i) => {
		// 	return (
		// 		acc + `<span>${artiste}${i === song.artistes.length - 1 ? "" : ", "}</span>`
		// 	);
		// }, ``)}
	};

	static header = (heading) => {
		return `<h1>${heading}</h1>`;
	};

	static navigation = (links) => {
		return `
		<nav class="page-links">
			<ul>
					${links.reduce((acc, curr, i) => {
						return (
							acc +
							`
							<li class='page-link ${i === 0 ? "active-link" : ""}'><a href="#${curr}">${curr} <hr></a></li>`
						);
					}, ``)}
			</ul>
		</nav>`;
	};

	static playlistCardMarkup = (playlists) => {
		return playlists.reduce((acc, curr) => {
			return (
				acc +
				`
				<div class="card">
					<img class="card-img" style="background-color: white;" src="./imgs/compact-disc-solid.svg" alt="song_image">
					<div class="card-details">
						<div class="playlist_name">
								<p>${curr}</p>
						</div>
					</div>
					<div class="view_playlist" data-playlist="${curr}"></div>
				</div>`
			);
		}, ``);
	};

	static playlistCard = () => {
		if (Object.keys(AudioPlaylist.playlist).length < 1) {
			return `
			<p class="no-playlist">You currently have no playlist</p>
			`;
		} else {
			return `
				<div class="cards">
					${this.playlistCardMarkup(Object.keys(AudioPlaylist.playlist))}
				</div>
			`;
		}
	};

	static section = (id, sections) => {
		return sections.reduce((acc, curr) => {
			return (
				acc +
				`
                <section class="page-section">
                    <header class="page-section-header">${this.header(curr.header)}</header>
                    <div class="cards">${
											id === "genre" ? this.genreCard(curr.cards) : this.card(curr.cards)
										}</cards>
                </section>`
			);
		}, ``);
	};
}
