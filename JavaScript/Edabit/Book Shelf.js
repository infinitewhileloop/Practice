// https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getTitle() {
        return `Title: ${this.title}`;
    }
    getAuthor() {
        return `Author: ${this.author}`;
    }
}

let PP = new Book('Pride and Prejudice', 'Jane Austen');
let H = new Book('Hamlet', 'William Shakespeare');
let WP = new Book('War and Peace', 'Leo Tolstoy');
