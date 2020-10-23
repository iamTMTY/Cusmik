import { Components } from "../Components.js";
import { Utility } from "../Utility.js";

export class Favourite extends Components {

    static main = document.querySelector('.main-content')

    static create = (links) => {
        this.main.innerHTML = `
            <div class="page" id="favourite">
                ${this.navigation(['Songs', 'Albums', 'Artistes'])}
            </div>`

        // add listener to the links in favourite   
        document.querySelectorAll('.link').forEach(link => {

            link.addEventListener('click', (e) => {
                Utility.addLinkStyle(e, 'link', 'active-link')
            })
        })
    }
}