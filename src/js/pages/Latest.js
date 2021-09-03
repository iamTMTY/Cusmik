import { Components } from "../Components/Components.js";
import { songs } from "../Database/Data.js";

export class Latest extends Components {
	static main = document.querySelector(".main-content");

	static create = (sections) => {
		this.main.innerHTML = `
            <div class="page" id="latest">
            <section class="page-section">
                <header class="page-section-header"><h1>Latest Releases</h1></header>
                <div class="cards">${this.card(songs, "play")}</div>
            </section>
            </div>
        `;
	};
}
