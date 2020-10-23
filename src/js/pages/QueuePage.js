import { Components } from "../Components.js";

export class QueuePage {

    static queue = document.querySelector('.queue')

    static display = () => {
        this.queue.style.left = 0
    }
    
    static addToQueue = async (songs) => {

        this.queue.querySelector('.songs').innerHTML += await Components.pane(songs, ``)
    }

    static addNowPlaying = (song) => {

    }

    static removePane = () => {

    }
}