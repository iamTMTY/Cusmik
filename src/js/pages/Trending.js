import { Components } from "../Components.js";

export class Trending extends Components {

    static page = document.querySelector('.page')

    static create = (sections) => {
        this.page.innerHTML = `
            <div id="trending">
                ${this.section('trending', sections)}
            </div>`
    }

}