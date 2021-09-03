import { Components } from "../Components/Components.js";
import { songs } from "../Database/Data.js";
import { Utility } from "../Utility.js";

export class Library extends Components {
	static main = document.querySelector(".main-content");

	static create = (sections) => {
		this.main.innerHTML = `
			<div class="page" id="library">
        <section class="page-section">
          <header class="page-section-header">
              <h1>Your Library</h1>
          </header>
          <ul>
            <li class="libraryLink"><a href="#playlist">Playlist</a></li>
            <li class="libraryLink"><a href="#favourite">Favourite</a></li>
            <li class="libraryLink"><a href="#history">Play History</a></li>
          </ul>
        </section>
			</div>`;

		document.querySelectorAll(".libraryLink").forEach((link) => {
			link.addEventListener("click", (e) => {
				Utility.loadLinkContent(e.target.hash.slice(1));
			});
		});
	};
}
