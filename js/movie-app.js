let genreButtons = document.querySelectorAll(".navbar-genres-btn");

for (let i = 0; i < genreButtons.length; i++) {
    genreButtons[i].addEventListener("click", function() {
        let genre = this.textContent;
        console.log("Filter movies by genre:", genre);
        // TODO: filter movies by genre and update the UI
    });
}
