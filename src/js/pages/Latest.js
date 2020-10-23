import { Components } from "../Components.js";

export class Latest extends Components {

    static main = document.querySelector('.main-content')

    static create = (sections) => {
        this.main.innerHTML = `
            <div class="page" id="latest">
                ${this.section('latest', sections)}
            </div>`
    }
}