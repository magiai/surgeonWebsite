document.addEventListener("DOMContentLoaded", function () {

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


    var hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener("click", function (event) {

        event.preventDefault();
        this.parentElement.nextElementSibling.style.display= "block";
    })

});
