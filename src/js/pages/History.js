import { History } from "../AudioPlayer/History.js";
import { Components } from "../Components/Components.js";

export class HistoryPage extends Components {
	static main = document.querySelector(".main-content");

	static create = (sections) => {
		const cards = History.songs.reduce((acc, curr) => {
			return acc + curr.outerHTML;
		}, ``);
		this.main.innerHTML = `
			<div class="page" id="home">
					<section class="page-section">
							<header class="page-section-header">
								<h1>Your Play History</h1>
							</header>
							<div class="cards">${cards}</div>
					</section>
			</div>`;
	};
}
