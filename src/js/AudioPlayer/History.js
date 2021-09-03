export class History /*extends AudioPlayer*/ {
	static songs = [];

	static addToHistory(card) {
		if (this.songs.length < 1) {
			this.songs.unshift(card);
		} else {
			const id = card.dataset.songid;
			id !== this.songs[0].dataset.songid && this.songs.unshift(card);
		}
	}
}
