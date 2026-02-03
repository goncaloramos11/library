let book = new Book("ols", "dasdasda", 20, true);
let book1 = new Book("yesire", "nope", 2000, false);

const myLibrary = [book, book1];

function Book(title, author, pages, read){
    this.id = self.crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read ? "i read that" : "i do not read that";
}

Book.prototype.toggleRead = function () {
    if(this.read == "i read that"){
        this.read = "i do not read that";
    }
    else{
        this.read = "i read that";
    }
};

function addBookToLibrary(event) {
    event.preventDefault();

    const title_name = document.querySelector("#book_title").value;
    const author_name = document.querySelector("#book_author").value;
    const pages = document.querySelector("#book_pages").value;

    let book = new Book(title_name, author_name, pages, false);

    myLibrary.push(book);

    displayNewBook(book);
}

function toggleButton(event){
    const bookOther = event.target.closest('.book');
    let bookToChange = myLibrary.find((book) => book.id === bookOther.dataset.bookId);
    bookToChange.toggleRead();
    displayBooks();
}

function displayNewBook(book){
    const container = document.querySelector(".content");

    let divBook = document.createElement('div');
    divBook.classList.add("book");
    divBook.dataset.bookId = book.id;

    let divText = document.createElement('div');
    divText.classList.add("text");

    divBook.appendChild(divText);

    let divTitle = document.createElement('div');
    divTitle.classList.add("title-book");
    divTitle.textContent = book.title;

    let divInfo = document.createElement('div');
    divInfo.classList.add('info');

    divText.appendChild(divTitle);
    divText.appendChild(divInfo);

    let divAuthor = document.createElement('div');
    divAuthor.classList.add('author');
    divAuthor.textContent = book.author;

    let divPages = document.createElement('div');
    divPages.classList.add('pages');
    divPages.textContent = book.pages;

    divInfo.appendChild(divAuthor);
    divInfo.appendChild(divPages);

    let divRead = document.createElement('div');
    divRead.classList.add('read');
    divRead.textContent = book.read;

    divBook.appendChild(divRead);

    let divButtonContainer = document.createElement('div');
    divButtonContainer.classList.add("btn-container");

    let divButton = document.createElement('button');
    divButton.classList.add('button-read');
    divButton.textContent = "Read";

    divButtonContainer.appendChild(divButton);
    divBook.appendChild(divButtonContainer);

    container.appendChild(divBook);
}

function displayBooks(){
    const listEl = document.querySelector(".content");
    listEl.innerHTML = "";
    for(i = 0; i< myLibrary.length; i++){
        displayNewBook(myLibrary[i]);
    }

    const buttonSubmit = document.querySelector("#book-form");
    const buttonRead = document.querySelectorAll(".button-read");
    buttonRead.forEach(button => button.addEventListener("click", toggleButton));
    buttonSubmit.addEventListener("submit", addBookToLibrary);
}


displayBooks();



