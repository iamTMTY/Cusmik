import { Utility } from "./Utility.js";
import { QueuePage } from "./pages/QueuePage.js";

export class AudioPlayer {
    static bottomBar = document.querySelector('.bottom-bar')
    static audio = this.bottomBar.querySelector('audio');
    static progressTrack = document.querySelector('.progress-track')
    static progress = this.progressTrack.querySelector('.progress')
    static songBar = this.progressTrack.querySelector('.song-bar')
    static time = this.progressTrack.children[0]
    static queue = []
    static playing = {}
    static running = null
    static repeatAll = false
    static repeatOne = false

    
    static playCard = (card) => {

        const song = {
            card,
            position: null // use uuid for unique ids
        }

        this.playPause(song)

        if(this.playing?.position !== song.position || this.playing.position === null) {
            song.position = 1
            this.queue = [song]
        }

    }

    static play = () => {
        
    }

    static playPause = (song) => {

        if(this.playing?.position === song.position) {
            if(this.running) {
                this.audio.pause()
                this.running = false 
            } else {
                this.audio.play()
                this.running = true
            }
        } else {
            this.playNewSong(song)
        }
    
    }

    static playNewSong = (song) => {
        this.audio.src = [song.card.dataset.src]
        this.playing = song
        Utility.updateBottomBar(song.card)
        this.audio.play()
        this.running = true
    }

    static addToQueue = (card) => {

        const song = {
            card,
            position: this.queue.length + 1
        }

        this.queue.push(song)
        QueuePage.addToQueue([song, song, song, song, song])

        console.log(this.queue);

    }

    static playNext = () => {
        const next = this.queue.indexOf(this.playing) + 1 

        if (next < this.queue.length) {
            this.playPause(this.queue[next])
        } else {
            this.playNewSong(this.queue[0])
        }
    }

    static playPrevious = () => {
            const previous = this.queue.indexOf(this.playing) - 1

            previous < 0 ?
            this.playNewSong(this.queue[this.queue.length - 1]) :
            this.playPause(this.queue[previous])
            
    }

    static songEnd = () => {
        if (this.repeatOne === true) { 
            this.audio.play() 
        }

        if (this.queue[this.queue.length - 1].position === this.playing.position) {
            if (this.repeatAll === true) {
                this.playNext()
            }
        } else {
            this.playNext()
        }
    }

    static toggleRepeat = () => {

    }

    static toggleshuffle = () => {

    }

    static updateTime = () => {
        const endTime = this.progressTrack.children[2]
        const mobileSongProgress = document.querySelector('.current-position') 

        this.time.innerText = Utility.formatTime(this.audio.currentTime)
        endTime.innerText = Utility.formatTime(this.audio.duration)
        this.progress.style.width =  `${(this.audio.currentTime / this.audio.duration) * 100}%`
        mobileSongProgress.style.width = `${(this.audio.currentTime / this.audio.duration) * 100}%` 
    }

    static seekStart = (e) => {

        if (this.queue.length < 1) {
            return
        }

        this.audio.removeEventListener('timeupdate', this.updateTime)

        const position = ((e.clientX - this.songBar.getBoundingClientRect().left)/this.songBar.getBoundingClientRect().width * 100)
        this.progress.style.width = `${position}%`
        // this.audio.currentTime = (position / 100) * this.audio.duration
        this.progress.style.backgroundColor = `green`

        this.time.innerText = Utility.formatTime((position / 100) * this.audio.duration)

        window.addEventListener('mousemove', this.seekSong)

        window.addEventListener('mouseup', this.seekEnd, {once: true})
    }

    static seekSong = (e) => {

        let position = ((e.clientX - this.songBar.getBoundingClientRect().left)/this.songBar.getBoundingClientRect().width * 100)
        if (e.clientX < this.songBar.getBoundingClientRect().left) {
            position = 0
            return            
        } else if (e.clientX > this.songBar.getBoundingClientRect().right) {
            position = 100
        }
        this.progress.style.width = `${position}%`
        this.time.innerText = Utility.formatTime((position / 100) * this.audio.duration)
        
        // this.audio.currentTime = (position / 100) * this.audio.duration

    }

    static seekEnd = (e) => {

        this.progress.style.backgroundColor = `rgb(255, 0, 51)`
        let position = ((e.clientX - this.songBar.getBoundingClientRect().left)/this.songBar.getBoundingClientRect().width * 100)

        if (e.clientX < this.songBar.getBoundingClientRect().left) {
            position = 0            
        } else if (e.clientX > this.songBar.getBoundingClientRect().right) {
            position = 100
        }

        this.audio.currentTime = (position / 100) * this.audio.duration
        this.time.innerText = Utility.formatTime((position / 100) * this.audio.duration)        

        window.removeEventListener('mousemove', this.seekSong)
        this.audio.addEventListener('timeupdate', this.updateTime)
    }
}