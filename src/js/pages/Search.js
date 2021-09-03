import { Components } from "../Components/Components.js";

export class Search extends Components {
	static main = document.querySelector(".main-content");

	static create = (sections) => {
		this.main.innerHTML = `
            <div class="page" id="search">
                <input type="search" autocomplete="off" name="search" id="" placeholder="song title, artist name, album name">
            </div>`;
	};
}
