let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {

}

function displayLibrary(myLibrary) {
    for (const book of myLibrary) {
        displayBook(book);
    }
}

function displayBook(book) {
    let newBook = document.createElement('div');
    newBook.classList.add('card');

    // Displays book's title
    let bookTitle = document.createElement('p');
    bookTitle.textContent = book.title;
    newBook.appendChild(bookTitle);

    // Displays book's author
    let bookAuthor = document.createElement('p');
    bookAuthor.textContent = book.author;
    newBook.appendChild(bookAuthor);

    // Displays book's page count
    let bookPages = document.createElement('p');
    bookPages.textContent = book.pages + " pages";
    newBook.appendChild(bookPages);

    // Displays if you have read the book
    let bookRead = document.createElement('p');
    if (book.read === true) {
        bookRead.textContent = "have read"
    }
    else {
        bookRead.textContent = "have not read"
    }
    newBook.appendChild(bookRead);

    container.appendChild(newBook);
}

const container = document.querySelector('.container');

myLibrary[0] = new Book("The Hobbit", "J.R.R. Tolkien", 310, true);
myLibrary[1] = new Book("Moby Dick", "Herman Melville", 427, false);

displayLibrary(myLibrary);