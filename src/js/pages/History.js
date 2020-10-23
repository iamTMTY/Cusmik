import { Components } from "../Components.js";

export class HistoryPage extends Components {

    static main = document.querySelector('.main-content')

    static create = (sections) => {
        this.main.innerHTML = `
            <div class="page" id="history">
                ${this.section('history', sections)}
            </div>`
    }
}