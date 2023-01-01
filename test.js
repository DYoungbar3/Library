let myLibrary = [];
const mainContainer = document.querySelector(".add-books");
const addBookBtn = document.querySelector(".newBook");
const form = document.querySelector('.form');
const submitBtn = document.querySelector('.submit');

// No longer lets ENTER key submit form
// Done to remove possibility of accidents
document.addEventListener('keypress', function (e) {
    if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
    }
    
});

submitBtn.addEventListener('click', () => {
    this.preventDefault  // makes button only do the following
    const title = document.querySelector('#title');
    myLibrary.push(title.textContent)
    addBookToLibrary(myLibrary)
    
})

function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary (library) {
    for (i in library) {
        const tag = document.createElement('section')
        const info = document.createTextNode(library[i])
        tag.appendChild(info)
        mainContainer.appendChild(tag)
    }
}