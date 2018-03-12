document.addEventListener("DOMContentLoaded", function () {

// automatic slider

    var myIndex = 0;
    slider();

    function slider() {
        var i;
        var x = document.getElementsByClassName("imageCabinet");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) {
            myIndex = 1
        }
        x[myIndex - 1].style.display = "block";
        setTimeout(slider, 6000);
    }

// show and hide menu

    var hamburger = document.querySelector('.hamburger');
    var show = document.querySelector('.menuStripe');

    hamburger.addEventListener("click", function (event) {

    if (show.style.display === "none") {

        event.preventDefault();
        show.style.display = "block";

    } else {

        event.preventDefault();
        show.style.display = "none";
        }
    })

});
