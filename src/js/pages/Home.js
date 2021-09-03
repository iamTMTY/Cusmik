import { Components } from "../Components/Components.js";
import { songs } from "../Database/Data.js";

export class Home extends Components {
	static main = document.querySelector(".main-content");

	static create = (sections) => {
		this.main.innerHTML = `
            <div class="page" id="home">
                <section class="page-section">
                    <header class="page-section-header">
                        <h1>Recommendations for You</h1>
                    </header>
                    <div class="cards">${this.card(songs, "play")}</div>
                </section>
            </div> 
            `;
	};
}
