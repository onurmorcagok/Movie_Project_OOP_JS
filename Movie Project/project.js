// Elements selected

const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];

// UI Object Started

const ui = new UI();

// Stroage Object created

const storage = new Storage();

// All events loaded

eventListeners();

function eventListeners() {

    form.addEventListener("submit", addMovie);
    document.addEventListener("DOMContentLoaded", function () {

        let movies = storage.getMoviesFromStorage();
        ui.loadAllMovies(movies);
    });

    cardBody.addEventListener("click",deleteMovie);
}

function addMovie(e) {

    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "") {

        ui.displayMessages("Lütfen tüm alanları doldurunuz.", "danger");

    } else {

        // New Movie
        const newMovie = new Movie(title, director, url);

        ui.addMovieToUI(newMovie); // UI Movie added

        storage.addMovieToStorage(newMovie); // Movie added to Storage

        ui.displayMessages("Film başarıyla eklendi.", "success");

    }

    ui.clearInputs(titleElement, directorElement, urlElement);

    e.preventDefault();
}

function deleteMovie(e) {
   
    if (e.target.id  === "delete-film"){
        ui.deleteMovieFromUI(e.target);
    }
}