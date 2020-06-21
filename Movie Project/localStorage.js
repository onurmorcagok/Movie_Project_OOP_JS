function Storage() {

}

Storage.prototype.addMovieToStorage = function (newMovie) {

    let movies = this.getMoviesFromStorage();

    movies.push(newMovie);

    localStorage.setItem("movies", JSON.stringify(movies));
}

Storage.prototype.getMoviesFromStorage = function () {

    let movies;

    if (localStorage.getItem("movies") === null) {

        movies = [];
    } else {
        movies = JSON.parse(localStorage.getItem("movies"));
    }

    return movies;
}