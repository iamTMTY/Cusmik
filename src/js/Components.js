import { Utility } from "./Utility.js"

export class Components {

    static card = (cards) => {

        return cards.reduce((acc, curr, index) => {
            return acc + `
                <div class="card song" data-src="./Music/Brooklyn-Baby.m4a" data-position="" >
                        <img src="${curr.imgSource}" alt="song_image">
                        <div class="song_details-action">
                            <button class="play"><i class="material-icons play">play_arrow</i></button>
                            <div class="song_details">
                                <p>${curr.title}</p>
                                <p>${curr.artistes.reduce((acc, artiste, i) => {
                                    return acc + `<span class="artiste">${artiste}${i === curr.artistes.length - 1 ? '' : ', '}</span>`
                                }, ``)}
                                </p>
                            </div>
                            <button class="add"><i class="material-icons add" >add</i></button>
                        </div>
                    </div>`
        }, ``)
    }

    static pane = async (songs) => {

        let panes = ``;
        await songs.reduce( (acc,curr) => {
            const queueAudio = document.querySelector('.queue').querySelector('audio')
            queueAudio.src = curr.card.dataset.src

            function panePromise() {
                return new Promise( (resolve) => {
                    queueAudio.addEventListener('loadedmetadata', (e) => {
                        resolve(e.target.duration)
                    },{once: true})
                })
            }

            return panePromise().then(duration => {
                console.log(duration);
                panes += `
                <div class="pane">
                    <div class="name">
                        <div class="index">${curr.position}</div>
                        <div class="details">
                            <img src="${curr.card.children[0].src}" alt="">
                            <div class="title_artiste">
                                <pre>${curr.card.children[1].children[1].children[0].innerText}</pre>
                                <pre class="artiste">${curr.card.children[1].children[1].children[1].innerHTML}</pre>
                            </div>
                        </div>
                    </div>
                    <i class="material-icons">play_arrow</i>
                    <div class="album">Ultraviolence</div>
                    <div class="duration">${Utility.formatTime(duration)}</div>
                    <i class="material-icons">add</i>
                </div>
                ` 
                console.log(panes);

            })
            
        }, ``)

        console.log(panes);
        return panes

        // await panePromise().then(duration => {
        //     panes += `
        //     <div class="pane">
        //         <div class="name">
        //             <div class="index">${songs[0].position}</div>
        //             <div class="details">
        //                 <img src="${songs[0].card.children[0].src}" alt="">
        //                 <div class="title_artiste">
        //                     <pre>${songs[0].card.children[1].children[1].children[0].innerText}</pre>
        //                     <pre class="artiste">${songs[0].card.children[1].children[1].children[1].innerHTML}</pre>
        //                 </div>
        //             </div>
        //         </div>
        //         <i class="material-icons">play_arrow</i>
        //         <div class="album">Ultraviolence</div>
        //         <div class="duration">${Utility.formatTime(duration)}</div>
        //         <i class="material-icons">add</i>
        //     </div>
        //     `
        // })

        // if(songs.length > 1) {
        //     songs.shift()
        //     return this.pane(songs, panes)
        // } else {
        //     console.log(panes);
        //     return panes
        // }
    }

    static header = (heading) => {
        return `<h1>${heading}</h1>`
    }

    static navigation = (links) => {

        return `<nav id="link">
                    <ul>
                        ${links.reduce((acc, curr, i) => {
                            return acc + `
                                <li class='link ${i === 0 ? 'active-link' : ''}'><a href="#${curr}">${curr} <hr></a></li>`
                        }, ``)}
                    </ul>
                </nav>`
    }

    static genreCard = (cards) => {
        return `
        <div class="cards">
            ${cards.reduce((acc, curr) => {
                return acc + `
                    <div class="card" id="genre">
                        <img src="${curr.imgSrc}" alt="image">
                        <div class="genre-overlay">
                            <p>${curr.genre}</p>
                        </div>
                    </div>`
            }, ``)}
        </div>`
    }

    static section = (id, sections) => {

        return sections.reduce((acc, curr) => {
            return acc + `
                <section>
                    <header>${this.header(curr.header)}</header>
                    <div class="cards">${id === "genre" ? this.genreCard(curr.cards) : this.card(curr.cards)}</cards>
                </section>`
        }, ``)
    }
}