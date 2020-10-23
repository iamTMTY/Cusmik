import { Favourite } from "./pages/Favourite.js";
import { Genre } from "./pages/Genre.js";
import { HistoryPage } from "./pages/History.js";
import { Home } from "./pages/Home.js";
import { Latest } from "./pages/Latest.js";
import { Playlist } from "./pages/Playlist.js";
import { Search } from "./pages/Search.js";
import { Trending } from "./pages/Trending.js";
import { AudioPlayer } from "./AudioPlayer.js";
import { QueuePage } from "./pages/QueuePage.js";


export class Utility {


    static addLinkStyle = (e, linksClass, activeClass) => {

        const target = this.getTarget(e)
        let active = target.parentElement.classList.contains(activeClass);
        const links = document.querySelectorAll(`.${linksClass}`)

        if(active) {
            return false;
        } else {
            links.forEach(link => {
                if(link.classList.contains(activeClass)) {
                    link.classList.remove(activeClass)
                }
            })
            target.parentElement.classList.add(activeClass)
        }
    }

    static loadLinkContent = (page) => {

        let data = []

        switch (page) {
            case 'trending':
                data = [{
                    header: 'Trending for you',
                    cards: [{
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        }
                    ]
                },
                {
                    header: 'Trending Songs',
                    cards: [{
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        }
                    ]
                },
                {
                    header: 'Trending Albums',
                    cards: [{
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        }
                    ]
                }
                ]
                Trending.create(data)
                break;
            case 'latest':
                data = [{
                    header: 'Latest Releases for you',
                    cards: [{
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        }
                    ]
                },
                {
                    header: 'Latest Songs',
                    cards: [{
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        }
                    ]
                },
                {
                    header: 'Latest Albums',
                    cards: [{
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        },
                        {
                        title: 'No Pressure',
                        artistes: ['logic'],
                        imgSource: './imgs/logic.jpg'
                        }
                    ]
                }
                ]
                Latest.create(data)
                break;
            case 'genre':
                data = []
                Genre.create(data)
                break;
            case 'search':
                data = []
                Search.create(data)
                break;
            case 'favourite':
                data = []
                Favourite.create(data)
                break;
            case 'history':
                data = []
                HistoryPage.create(data)
                break;
            case 'library':
                data = []
                Library.create(data)
                break;
            case 'playlist':
                data = []
                Playlist.create(data)
                break;
            

            default:
                Home.create(data)
                break;
        }
    }

    static theme = () => {

        const root = document.documentElement;
        const themeToggle = document.querySelector('.theme-toggle')
        
        if(themeToggle.classList.contains('dark')) {
            root.style.setProperty('--bg-color', '#fff');
            root.style.setProperty('--text-color', '#000');
            root.style.setProperty('--card-color', 'rgb(207, 206, 206)');
    
        } else {
            root.style.setProperty('--bg-color', 'rgb(24, 23, 23)');
            root.style.setProperty('--text-color', '#fff');
            root.style.setProperty('--card-color', 'rgb(44, 43, 43)');
        }
    
        themeToggle.classList.toggle('dark');
        themeToggle.classList.toggle('light');
    }

    static startAudioPlayer() {

    }

    static bottomBarEventDelegator(e) {

        const bottomBar = document.querySelector('.bottom-bar')
        const classes = e.target.classList

        classes.contains("play") ?
        bottomBar.querySelector('.play').addEventListener('click', AudioPlayer.play()) :
        classes.contains("previous") ?
        bottomBar.querySelector('.previous').addEventListener('click', AudioPlayer.playPrevious) :
        classes.contains("next") ?
        bottomBar.querySelector('.next').addEventListener('click', AudioPlayer.playNext) :
        classes.contains("repeat") ?
        bottomBar.querySelector('.repeat').addEventListener('click', AudioPlayer.toggleRepeat) :
        classes.contains("shuffle") ?
        bottomBar.querySelector('.shuffle').addEventListener('click', AudioPlayer.toggleShuffle) :
        classes.contains("queue-btn") ?
        bottomBar.querySelector(".queue-btn").addEventListener('click', QueuePage.display) :
        classes.contains("volume-btn") ?
        bottomBar.querySelector('.volume-btn').addEventListener('click', AudioPlayer.volumeControl) :
        false        

    
    }

    static updateBottomBar = (card) => {
        const bottomBar = document.querySelector('.bottom-bar')
        const mobileBottomBar = document.querySelector('.mobile-bottom-bar')
        const songImg = bottomBar.querySelector('img')
        const mobileSongImg = mobileBottomBar.querySelector('img')
        const songTitle = bottomBar.querySelector('.title')
        const mobileSongTitle = mobileBottomBar.querySelector('.title')
        const songArtiste = bottomBar.querySelector('.artiste')
        const mobileSongArtiste = mobileBottomBar.querySelector('.artiste')


        songImg.src = card.children[0].src
        mobileSongImg.src = card.children[0].src
        songTitle.innerHTML = card.children[1].children[1].children[0].innerHTML
        mobileSongTitle.innerHTML = card.children[1].children[1].children[0].innerHTML
        songArtiste.innerHTML = card.children[1].children[1].children[1].innerHTML
        mobileSongArtiste.innerHTML = card.children[1].children[1].children[1].innerHTML
        // mobileSongImg.src = card.children[0].src
        // mobileSongTitle.innerHTML = card.children[1].children[1].children[0].innerHTML
        // mobileSongArtiste.innerHTML = card.children[1].children[1].children[1].innerHTML
    }

    static getTarget = (e) => {
        if (e.target.tagName === "I") { 
            return e.target.parentElement 
        } else { 
            return e.target
        }
    }

    static formatTime = (time) => {

        const arr = (`${time / 60}`).split('.')
        const minutes = arr[0]

        arr[0] = 0
        const seconds = +(`${arr.join('.') * 60}`).split('.')[0]

        if (seconds < 10)  {
            return `${minutes}:0${seconds}` 
        } else {
            return `${minutes}:${seconds}`
        }
    }

    static addOptions = (e) => {
        
        const main = document.querySelector('.main-content')
        const sideNav = document.querySelector('.side-nav')
        const contentBar = document.querySelector('.content-bar')

        const button = this.getTarget(e)
  
        // create elements
        const elements = this.createElement([
        {class: "add-container", text:""}, 
        {class: "add-to-playlist", text:"add to playlist"},
        {class: "add-to-queue", text: "add to queue"},
        {class: "add-to-favourite", text: "add to favourites"}
                         ])

        // append children to container
        const container = elements[0]
        elements.forEach((element, index) => {
            index !== 0 && container.appendChild(element)
        })

        //append container to button
        button.appendChild(container)

        const horizontal = main.getBoundingClientRect().width - (e.clientX - sideNav.getBoundingClientRect().width) < container.getBoundingClientRect().width
        const vertical = main.getBoundingClientRect().height - (e.clientY - contentBar.getBoundingClientRect().height) < container.getBoundingClientRect().height

        
        if (horizontal) {
            container.style.right = `${button.getBoundingClientRect().width / 2}px`
            container.style.left = ``
        } else {
            container.style.left = `${button.getBoundingClientRect().width / 2}px`
            container.style.right = ``
        }

        if (vertical) {
            container.style.bottom = `${button.getBoundingClientRect().height / 2}px`
            container.style.top = ``
        } else {
            container.style.top = `${button.getBoundingClientRect().height / 2}px`
            container.style.bottom = ``
        }

        document.addEventListener('mousedown', (e) => {
            const card = e.target.parentElement.parentElement.parentElement.parentElement

            switch (e.target.className) {
                case 'add-to-playlist':
                    console.log("added to playlist");
                    break;
                case 'add-to-queue':
                    AudioPlayer.addToQueue(card)
                    break;
                case 'add-to-favourite':
                    console.log("added to favourite");
                    break;
            
                default:
                    break;
            }

            Utility.removeAddContainer(button.children[1])
        },{once: true})

        // document.addEventListener('mousedown', () => {
        // },{once: true})
    }

    static createElement = (elements) => {
        const arr = []

        elements.forEach(element => {
            const div = document.createElement('div')
            div.classList.add(`${element.class}`)
            div.innerText = element.text
            arr.push(div)
        })

        return arr
    }

    static removeAddContainer = (container) => {
        container.remove()
    }
}