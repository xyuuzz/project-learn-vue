document.addEventListener("click", function(click) {

    if (click.target.getAttribute("id") === "title") {
        click.target.removeAttribute("placeholder");

        const labelTitle = document.getElementById("labelTitle");
        labelTitle.removeAttribute("hidden");
    }


    if (click.target.getAttribute("id") === "description") {
        click.target.removeAttribute("placeholder");

        const labelDecription = document.getElementById("labelDecription");
        labelDecription.removeAttribute("hidden");
    }
});