import { Components } from "../Components.js";

export class Home extends Components {

    static main = document.querySelector('.main-content')

    static create = (sections) => {
        this.main.innerHTML = `
            <div class="page" id="home">
                ${this.section('home', sections)}
            </div>`
    }
}