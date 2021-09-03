import { Components } from "../Components/Components.js";

export class Genre extends Components {
	static main = document.querySelector(".main-content");

	static create = (sections) => {
		this.main.innerHTML = `
			<div class="page" id="library">
					<a href="#playlist">Playlist</a>
					<a href="#favourite">Favourite</a>
					<a href="#history">Play History</a>
			</div>`;
	};
}
