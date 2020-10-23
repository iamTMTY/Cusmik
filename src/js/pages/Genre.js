import { Components } from "../Components.js";

export class Genre extends Components {

    static main = document.querySelector('.main-content')

    static create = (sections) => {
        this.main.innerHTML = `
            <div class="page" id="genre">
                ${this.section('genre', sections)}
            </div>`
    }
}