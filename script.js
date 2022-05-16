let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    // Gets all the values from input form
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read;
    if (document.getElementById('read').checked) {
        read = true;
    }
    else {
        read = false;
    }
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayLibrary(myLibrary);
    closeForm();
}

function displayLibrary(myLibrary) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for (const book of myLibrary) {
        displayBook(book);
    }
}

function displayBook(book) {
    let newBook = document.createElement('div');
    newBook.classList.add('card');
    newBook.dataset.bookTitle = book.title;

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
        bookRead.textContent = "have read";
    }
    else {
        bookRead.textContent = "have not read";
    }
    newBook.appendChild(bookRead);

    // Adds delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.addEventListener('click', deleteCard);
    deleteBtn.textContent = "X";
    deleteBtn.classList.add('delete-btn');
    newBook.appendChild(deleteBtn);

    // Appends final book to container
    container.appendChild(newBook);
}

function deleteCard(e) {
    const bookTitle = e.currentTarget.parentElement.dataset.bookTitle;
    myLibrary.splice(myLibrary.findIndex(book => book.title === bookTitle), 1);
    const collection = container.children;
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].dataset.bookTitle === bookTitle) {
            let deletedBook = collection[i];
            container.removeChild(deletedBook);
        }
    }
}

function changeReadStatus(e) {

}

function openForm() {
    document.querySelector('.form-container').reset();
    document.getElementById('addBookForm').style.display = "block";
}

function closeForm() {
    document.getElementById('addBookForm').style.display = "none";
}

const container = document.querySelector('.container');
const addBookBtn = document.querySelector('#add-book-btn');
addBookBtn.addEventListener('click', openForm);
const submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', addBookToLibrary);

displayLibrary(myLibrary);