import { Components } from "../Components/Components.js";
import { songs } from "../Database/Data.js";

export class Trending extends Components {
	static main = document.querySelector(".main-content");

	static create = () => {
		this.main.innerHTML = `
            <div class="page" id="trending">
                <section class="page-section">
                    <header class="page-section-header"><h1>Trending</h1></header>
                    <div class="cards">${this.card(songs, "play")}</div>
                </section>
            </div>`;
	};
}
