import { Utility } from "./js/Utility.js";
import { AudioPlayer } from "./js/AudioPlayer.js";

document.addEventListener('DOMContentLoaded', () => {


    // side-link event listener
    document.querySelectorAll('.side-link').forEach(link => {
        link.addEventListener('click', (e) => {

            // changes link color
            Utility.addLinkStyle(e, 'side-link', 'active-side-link')

            // loads the content in a page
            Utility.loadLinkContent(e.target.hash.slice(1))
        
        })
    })


    // main-content events
    document.querySelector('.main-content').addEventListener('click', (e) => {

        const card = Utility.getTarget(e).parentElement.parentElement

        if (e.target.classList.contains('play')) {
            AudioPlayer.playCard(card)
        } else if (e.target.classList.contains('add')) {
            Utility.addOptions(e)
        }
    })


    // mobile-link event listener
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', (e) => {

            // changes link color
            Utility.addLinkStyle(e, 'mobile-link', 'active-link')

            // loads the content in a page
            const page = Utility.getTarget(e).hash.slice(1)
            Utility.loadLinkContent(page)
        })
    })

    // Dark mode toggler
    document.querySelector('.theme-toggle').addEventListener('click', Utility.theme)

    // audio events
    AudioPlayer.audio.addEventListener('ended', AudioPlayer.songEnd)
    AudioPlayer.audio.addEventListener('timeupdate', AudioPlayer.updateTime)
    AudioPlayer.audio.addEventListener('loadedmetadata', AudioPlayer.updateTime)
    // const progressTrack = document.querySelector('.progress-track')
    // const bar = progressTrack.querySelector('.bar')

    // bar.addEventListener('mousedown', AudioPlayer.seekStart)

    // bottom bar events
    const bottomBar = document.querySelector('.bottom-bar')
    bottomBar.addEventListener('click', Utility.bottomBarEventDelegator)
    bottomBar.addEventListener('mousedown', (e) => {
        e.target.classList.contains('song-bar') || e.target.classList.contains('song-progress') ?
        AudioPlayer.seekStart(e) :
        e.target.classList.contains('volume-bar') || e.target.classList.contains('volume-progress') ?
        AudioPlayer.controlVolume(e) :
        false
    })
})


