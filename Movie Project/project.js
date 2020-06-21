const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

// UI Object Started

const ui = new UI();

// All events loaded

eventListeners();

function eventListeners() {

    form.addEventListener("submit", addMovie);
}

function addMovie(e) {

    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "") {

        // Failed

    } else {

        // New Movie
        const newMovie = new Movie(title,director,url);

        ui.addMovieToUI(newMovie); // UI Movie added

    }

    ui.clearInputs(titleElement,directorElement,urlElement);

    e.preventDefault();
}