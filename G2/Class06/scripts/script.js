function Book(title = '', author = '', readingStatus = ''){
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;
    this.displayReadingStatus = function() {
        if (this.readingStatus.toLocaleLowerCase() === 'yes') {
            console.log(`You already read ${this.title} by ${this.author}!`);
        } else if (this.readingStatus.toLocaleLowerCase() === 'no') {
            console.log(`You still need to read ${this.title} by ${this.author}!`);
        }
        else {
            console.log('Wrong input, try again.')
        }
    }
}

let bookTitle = prompt('Please enter book title');
let bookAuthor = prompt('Please enter book Author');
let readingStatus = prompt('Have you read this book already?');

let book = new Book(bookTitle, bookAuthor, readingStatus);
book.displayReadingStatus();