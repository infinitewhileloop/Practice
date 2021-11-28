// https://www.codewars.com/kata/6089c7992df556001253ba7d/

class Song {

    constructor(titlePar, artistPar) {

        this._title = titlePar;
        this._artist = artistPar;
    }
    get title() {
        return this._title;
    }
    get artist() {
        return this._artist;
    }

    uniqListener = new Set();

    howMany(listeners) {
        let oldSize = this.uniqListener.size;
        listeners.forEach(item => this.uniqListener.add(item.toLowerCase()));
        return this.uniqListener.size - oldSize;

    }
}
