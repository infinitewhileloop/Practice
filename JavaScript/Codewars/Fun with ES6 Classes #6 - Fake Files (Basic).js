// https://www.codewars.com/kata/5784c8116211383b5f0001d3/

class File {
    constructor(fullName, contents) {
        this._fullName = fullName;
        this._contents = contents;
        this._filename = fullName.replace(/\.[\w-]*?$/, '');
        this._extension = fullName.replace(/^.*\./, '');
        this._numGetsCalls = 0;
        this._numGetcCalls = 0;
    }
    get fullName() { return this._fullName; }
    set fullName(newVal) { return; }
    get filename() { return this._filename; }
    set filename(newVal) { return this._filename; }
    get extension() { return this._extension; }
    set extension(newVal) { return; }
    getContents() {
        return this._contents;
    }
    write(str) {
        if(this._contents === '') {  // if content is empty at the moment
            this._contents = `${str}`;
        } else {
            this._contents = `${this._contents}\n${str}`;
        }
    }
    gets() {
        this._numGetsCalls++;
        return this._contents.split('\n')[this._numGetsCalls - 1] || undefined;
    }
    getc() {
        this._numGetcCalls++;
        return this._contents.split('')[this._numGetcCalls - 1] || undefined;
    }
}
