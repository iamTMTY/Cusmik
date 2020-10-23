import { Components } from "../Components.js";

export class Playlist extends Components {

    static main = document.querySelector('.main-content')

    static create = (sections) => {
        this.main.innerHTML = `
            <div class="page" id="playlist">
                ${this.section('playlist', sections)}
            </div>`
    }
}