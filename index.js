let myLibrary = ["The Hobbit", "Uncrowned", "Awesome Sauce"];
const mainContainer = document.querySelector(".container");
const addBookBtn = document.querySelector(".newBook");
const form = document.querySelector('.form');
const submitBtn = document.querySelector('.submit');

form.style.display = 'none';

addBookBtn.addEventListener('click', () => {
    form.style.display = 'grid';
})

document.addEventListener('keypress', function (e) {
    if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
    }
    
});

submitBtn.addEventListener('click', () => {
    const title = document.querySelector('#title');
    myLibrary.push(title)
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