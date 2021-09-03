import { Components } from "../Components/Components.js";
import { Utility } from "../Utility.js";
import { Favourite as AudioFavourite } from "../AudioPlayer/Favourite.js";
import { songs } from "../Database/Data.js";

export class Favourite extends Components {
	static main = document.querySelector(".main-content");

	static create = (links) => {
		const favouriteSongs = AudioFavourite.songs.map((id) => {
			return songs[id - 1];
		});

		this.main.innerHTML = `
			<div class="page" id="home">
					<section class="page-section">
							<header class="page-section-header">
								<h1>Your Favourite Songs</h1>
							</header>
							<div class="cards">${this.card(favouriteSongs, "play")}</div>
					</section>
			</div>`;
	};
}
