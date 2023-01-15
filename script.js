let myLibrary = []

const submitBtn = document.querySelector('.submit');

// No longer lets ENTER key submit form
// Done to remove possibility of accidents
document.addEventListener('keypress', function (e) {
    if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
    }
});

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const newTitle = document.querySelector("#title").value;
    const newAuthor = document.querySelector("#author").value;
    const pageCount = document.querySelector("#pages").value;

    const readStatus = document.querySelector('input[name=readStatus]:checked').value;

    newCard(newTitle, newAuthor, pageCount, readStatus)

});

function newCard(title, author, pages, status) {
    const mainLibrary = document.querySelector(".cards");
    mainLibrary.innerHTML += `
    <div class="card text-center bg-light border-info" style="width: 18em">
        <div class="card-body text-info">
            <h2>${title}</h3>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">by ${author}</li>
            <li class="list-group-item">${pages} Pages</li>
            <li class="list-group-item">${status}</li>
        </ul>
    </div> 
    `
}