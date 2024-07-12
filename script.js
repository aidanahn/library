// Library Objects

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}





// Created Default Objects

myLibrary.push(new Book('Animal Farm', 'George Orwell', 110, false));
myLibrary.push(new Book('Pride and Prejudice', 'Jane Austen', 279, false));
myLibrary.push(new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180, false));
myLibrary.push(new Book('1984', 'George Orwell', 328, false));
myLibrary.push(new Book("Harry Potter and the Sorcerer's Stone", 'J.K. Rowling', 320, false));
createLibrary();





// Pop Up Logic

const popupContainer = document.querySelector('.pop-up-container');
const addButton = document.querySelector('.add-btn');

addButton.addEventListener('click', function() {
    popupContainer.style.display = 'block';
})

window.addEventListener('click', function(e) {
    if (e.target === popupContainer) {
        popupContainer.style.display = 'none';
    }
})

document.querySelector('form').addEventListener('submit', function() {
    event.preventDefault();
    addBookToLibrary();
    createLibrary();
    popupContainer.style.display = 'none';
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#page').value = '';
    document.querySelector('#read').checked = false;



    console.clear();
    console.log(myLibrary);
})






// Create Library Books

function addBookToLibrary() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#page').value;
    const read = document.querySelector('#read').checked;

    myLibrary.push(new Book(title, author, pages, read));
}

function createLibrary() {
    const mainContainer = document.querySelector('.main-container');
    mainContainer.textContent = '';

    for (let i = 0; i < myLibrary.length; i++) {        
        let bookTitle = document.createElement('p');
        bookTitle.textContent = '"' + myLibrary[i].title + '"';
        let bookAuthor = document.createElement('p');
        bookAuthor.textContent = myLibrary[i].author;
        let bookPages = document.createElement('p');
        bookPages.textContent = myLibrary[i].pages;
        let bookContainer = document.createElement('div');
        let bookRead = document.createElement('button');
        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        
        changeReadButton(i, bookRead);
        
        bookContainer.appendChild(bookTitle);
        bookContainer.appendChild(bookAuthor);
        bookContainer.appendChild(bookPages);
        mainContainer.appendChild(bookContainer);
        bookContainer.appendChild(bookRead);
        bookContainer.appendChild(removeButton);

        mainContainer.lastChild.classList.add('book-container');

        removeButton.addEventListener('click', function() {
            console.log(myLibrary);
            myLibrary.splice(bookContainer.id, 1);
            bookContainer.remove();
            setIds();
        })

        bookRead.addEventListener('click', function() {
            console.clear();    
            if (myLibrary[bookContainer.id].read === false) {
                myLibrary[bookContainer.id].read = true;
            }
            else {
                myLibrary[bookContainer.id].read = false;
            }
            console.log(myLibrary);
            changeReadButton(bookContainer.id, bookRead);
        })
    }
    setIds();
}

function setIds() {
    const containers = document.querySelectorAll('.book-container');
    for (let i = 0; i < myLibrary.length; i++) {
        containers[i].setAttribute('id', i);
    }
}

function changeReadButton(i, bookRead) {
    if (myLibrary[i].read === false) {
        bookRead.textContent = 'Not Read';
        bookRead.setAttribute('class', 'not-read')
    }
    else {
        bookRead.textContent = 'Read';
        bookRead.setAttribute('class', 'read')
    }
}