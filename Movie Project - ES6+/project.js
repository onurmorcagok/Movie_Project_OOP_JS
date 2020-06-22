// Elements selected

const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

// All events loaded

eventListeners();

function eventListeners() {

    form.addEventListener("submit", addMovie);
    document.addEventListener("DOMContentLoaded", function () {

        let movies = Storage.getMoviesFromStorage();
        UI.loadAllMovies(movies);
    });

    cardBody.addEventListener("click", deleteMovie);
    clear.addEventListener("click",clearAllMovie);
}

function addMovie(e) {

    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "") {

        UI.displayMessages("Lütfen tüm alanları doldurunuz.", "danger");

    } else {

        // New Movie
        const newMovie = new Movie(title, director, url);

        UI.addMovieToUI(newMovie); // UI Movie added

        Storage.addMovieToStorage(newMovie); // Movie added to Storage

        UI.displayMessages("Film başarıyla eklendi.", "success");

    }

    UI.clearInputs(titleElement, directorElement, urlElement);

    e.preventDefault();
}

function deleteMovie(e) {

    if (e.target.id === "delete-film") {
        UI.deleteMovieFromUI(e.target);
        Storage.deleteMovieFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        UI.displayMessages("Film başarıyla kaldırıldı.", "success");
    }
}

function clearAllMovie() {

    UI.clearAllMoviesFromUI();
    Storage.clearAllMoviesFromStorage();
}