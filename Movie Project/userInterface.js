function UI() {


}

UI.prototype.addMovieToUI = function (newMovie) {

    /*
         <tr>
         <td><img src="" class="img-fluid img-thumbnail"></td>
         <td></td>
         <td></td>
         <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr> 
    */

    const movieList = document.getElementById("films");

    movieList.innerHTML +=

        `
    <tr>
    <td><img src="${newMovie.url}" class="img-fluid img-thumbnail"></td>
    <td>${newMovie.title}</td>
    <td>${newMovie.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>

    `

}

UI.prototype.clearInputs = function (element1, element2, element3) {

    element1.value = "";
    element2.value = "";
    element3.value = "";
}